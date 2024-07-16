import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";
@Injectable({
    providedIn: 'root'
})

export class ProjectService{
    private projects: Project[] = [
        new Project('Join', 'Join is a Kanban Project Management Tool, like Trello', ['JavaScript', 'HTML', 'CSS'], "https://github.com/SchrimpsMitReis/Join---Kanban-Webapp"),
        new Project('Sharkie', 'Sharkie is a funny little BrowserGame ablout a Sharkie getting along with the Deep-Sea-BadGuys', ['JavaScript', 'HTML', 'CSS'], "https://github.com/SchrimpsMitReis/Sharkie---The-Shark"),
        new Project('PokeDex', "I don't know the topics your Childhood, Pokémon were mine, so I created a PokéDex App by Using the PokeAPI.", ['JavaScript', 'HTML', "CSS"], "https://github.com/SchrimpsMitReis/Pokemon"),
        new Project('PizzaPinball', "A Game, me an some nice guys from the Rhein Ahr Campus in Remagen,created this little funny Game for the 'LudumDare' GameJam", ['Blender','Adobe Photoshop', 'Unity'], "https://github.com/RAC-Games/LD53-Delivery" )
    ]

        getProjects(): Project[]{
        return this.projects;
    }
}