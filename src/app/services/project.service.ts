import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";
import { join } from "./Projekte/Join.project";
import { sharkie } from "./Projekte/Sharkie.project";
import { pokedex } from "./Projekte/Pokedex.project";
import { PPP } from "./Projekte/PPP.project";
@Injectable({
    providedIn: 'root'
})

export class ProjectService{

    
    private projects: Project[] = [
        join,
        sharkie,
        pokedex,
        PPP
    ]

        getProjects(): Project[]{
        return this.projects;
    }
}