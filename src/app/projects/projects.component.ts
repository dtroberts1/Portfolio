import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import { Project } from '../interfaces/project';
import{ProjectYear} from '../interfaces/project-year';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectYears: ProjectYear[] = [
    {
      year: '2021',
      'isSelected': false,
    },
    {
      year: '2020',
      'isSelected': false,
    },
    {
      year: '2019',
      'isSelected': false,
    },
    {
      year: '2018',
      'isSelected': false,
    },
  ];
  projects : Project[] = [
    {
      name: 'Coffee Truck Mgmt',
      textColor: 'white',
      description: 'Here is a description',
      themeColor: 'rgb(227,218,201,50%)',
      demoAvailable: true,
      imgPath: '../../assets/images/coffeecups.jpg',
      technologyList : [
        'Angular',
        'ExpressJS',
        'AWS',
        'SQL',
      ],
      viewTypes: [
        {
          type: 'url',
          url: 'http://somewebsite.com',
          displayName: 'http://somewebsite.com',
        },
        {
          type: 'sourceCode',
          url: 'https://github.com/dtroberts1/ctms',
          displayName: 'Source Code',
        }
      ],
    },
    {
      name: 'Room Rental Management',
      description: 'Here is a description',
      textColor: 'white',
      demoAvailable: false,
      themeColor: 'rgb(246,164,104)',
      imgPath: '../../assets/images/House interior 3.jpg',
      technologyList: [
        'ASP.NET',
        'Angular',
        'Entity Framework',
      ],
      viewTypes: [
        {
          type: 'url',
          url: 'http://roomrentalmgmt.com',
          displayName: 'http://roomrentalmgmt.com',
        },
        {
          type: 'sourceCode',
          url: 'https://github.com/dtroberts1/RRMS_Frontend',
          displayName: 'Source Code - Frontend',
        },
        {
          type: 'sourceCode',
          url: 'https://github.com/dtroberts1/RRManagement',
          displayName: 'Source Code - Backend',
        }
      ],
    }
  ];
  projects2: any[];
  constructor(public apollo: Apollo,
    @Inject(DOCUMENT) private document: Document) {

  }

  getDarkerColor(project: Project){
    let colorArray = Array.from(project.themeColor.substring(project.themeColor.indexOf('(') + 1, project.themeColor.indexOf(')'))
      .split(',')).map(item => parseInt(item.replace(' ', '')));
      let color = `rgba(${(colorArray[0] - 100)}, ${(colorArray[1] - 100)}, ${(colorArray[2] - 100)}, 1)`;
    return color;
  }

  goToUrl(url: string){
    window.open(
      url,
      '_blank'
    );
  }

  goToSourceCode(project: Project){
    let sourceCodeList = project.viewTypes.filter(vT => vT.type === 'sourceCode');
    if (sourceCodeList && sourceCodeList.length){
      window.open(
        sourceCodeList[0].url,
        '_blank'
      );

    }
  }

  getGradientHelper(project: Project, index: number){
    let arrayColor = Array.from(project.themeColor.substring(project.themeColor.indexOf('(') + 1, project.themeColor.indexOf(')'))
      .split(',')).map(item => parseInt(item.replace(' ', '')));
    let firstColor = `rgba(${(arrayColor[0] + (index * 10))}, ${(arrayColor[1] + (index * 10)) * (index == 2 ? 1 : 1)}, ${(arrayColor[2] + (index * 10))}, .4)`;
    let nextColor = `rgba(${(arrayColor[0] + ((index + 1) * 10) - (index == 1 ? 100 : 0))}, ${(arrayColor[1] + ((index + 1) * 10) - (index == 1 ? 100 : 0))}, ${(arrayColor[2] + ((index + 1) * 10) - (index == 1 ? 100 : 0))}, ${(index == 0 ? '.1' : '.9')}`;
    return `linear-gradient(${60 * (index + 1)}deg, ${firstColor}, ${nextColor}) ${(index == 0 ? '30%' : '90%')})`;
  }

  getGradient(project: Project){
    let gradientsStr = '';
    for(let i = 0; i < 2; i++){
      gradientsStr += this.getGradientHelper(project, i) + (i < 1 ? ', ' : '');
    }
    return gradientsStr;

  }

  selectYear(event : any){
    console.log({"event":event})
    console.log("year selected..");
    if (event && event.target){
      let selectedYearText = event.target.innerText;
      this.projectYears.forEach(year => year.isSelected = false);
      let projYear = this.projectYears.find(year => year.year === selectedYearText);
      projYear.isSelected = true;

    }
  }

  ngOnInit(): void {

    this.projectYears[0].isSelected = true;

    this.apollo.query<any>({
      query: gql`
      {
      user(login: "dtroberts1") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage

                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
      `
      
    }).subscribe((data) => {
      this.projects2 = data.data.user.pinnedItems.edges;
    });
  }

}
