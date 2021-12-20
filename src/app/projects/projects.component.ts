import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import { Project } from '../interfaces/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects : Project[] = [
    {
      name: 'Coffee Truck Mgmt',
      textColor: 'white',
      backColor: 'rgb(227,218,201, 50%)',
      imgPath: '../../assets/images/coffeecups.jpg',
      technologyList : [
        'Angular',
        'ExpressJS',
        'AWS',
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
      textColor: 'white',
      backColor: 'rgb(104, 151, 146)',
      imgPath: '../../assets/images/coffeecups.jpg',
      technologyList: [
        'ASP.NET',
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

  goToUrl(url: string){
    this.document.location.href = url;
  }
  getGradientHelper(project: Project, index: number){
    console.log("backcolor:"+project.backColor)
    let arrayColor = Array.from(project.backColor.substring(project.backColor.indexOf('(') + 1, project.backColor.indexOf(')'))
      .split(',')).map(item => parseInt(item.replace(' ', '')));
    console.log({"arrayColor":arrayColor})
    let firstColor = `rgba(${(arrayColor[0] + (index * 10))}, ${(arrayColor[1] + (index * 10)) * (index == 2 ? 1 : 1)}, ${(arrayColor[2] + (index * 10))}, .4)`;
      let nextColor = `rgba(${(arrayColor[0] + ((index + 1) * 10) - (index == 1 ? 100 : 0))}, ${(arrayColor[1] + ((index + 1) * 10) - (index == 1 ? 100 : 0))}, ${(arrayColor[2] + ((index + 1) * 10) - (index == 1 ? 100 : 0))}, ${(index == 0 ? '.1' : '.9')}`;
      console.log({"nextColor":nextColor})
    //let color = 'rgb(133, 101, 97)';
    return `linear-gradient(${60 * (index + 1)}deg, ${firstColor}, ${nextColor}) ${(index == 0 ? '30%' : '90%')})`;
  }

  getGradient(project: Project){
    let gradientsStr = '';
    for(let i = 0; i < 2; i++){
      gradientsStr += this.getGradientHelper(project, i) + (i < 1 ? ', ' : '');
    }
    console.log("gradient is " + gradientsStr)
    return gradientsStr;

  }
/*
  getGradient(){
    return linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`
  }
*/
  ngOnInit(): void {

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
      console.log({"data":data});
      console.log({"data.data.user.pinnedItems.edges":data.data.user.pinnedItems.edges})
      this.projects2 = data.data.user.pinnedItems.edges;
      // console.log(this.projects2);
    });
  }

}
