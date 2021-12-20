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
      imgPath: '../../assets/images/coffeecups.jpg',
      technologyList : [
        'ExpressJS',
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
