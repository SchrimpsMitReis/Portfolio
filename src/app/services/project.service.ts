import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";
@Injectable({
    providedIn: 'root'
})

export class ProjectService{
    private projects: Project[] = [
        new Project('Join', 'Join is a Kanban Project Management Tool, like Trello', ['JavaScript', 'HTML', 'CSS']),
        new Project('Sharkie', 'Sharkie is a funny little BrowserGame ablout a Sharkie getting along with the Deep-Sea-BadGuys', ['JavaScript', 'HTML', 'CSS'])
    ]


    getProjects(): Project[]{
        return this.projects;
    }
}