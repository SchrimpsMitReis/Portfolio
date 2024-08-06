import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";
@Injectable({
    providedIn: 'root'
})

export class ProjectService{
    private projects: Project[] = [
        new Project('Join', 'Join ist ein Kanban-Board und Projektmanagement-Tool, das mit Trello vergleichbar ist. Es ermöglicht das Erstellen und Priorisieren von Aufgaben und Tasks für Projekte. Diese können dann einzelnen Teammitgliedern zugewiesen werden. Darüber hinaus bietet Join die Möglichkeit, Teamkontakte zu speichern.', ['JavaScript', 'HTML', 'CSS'], "https://github.com/SchrimpsMitReis/Join---Kanban-Webapp"),
        new Project('Sharkie', "Sharkie ist ein unterhaltsames kleines Browsergame. Es dreht sich um einen kleinen Hai, der sich durch das harte Leben im Ozean kämpfen muss. Das Spiel ist ein Jump 'n' Run mit nur einem Level. Der Endgegner nimmt den Begriff 'Jump' etwas zu wörtlich. In naher Zukunft soll auch eine Steuerung per Controller implementiert werden.", ['JavaScript', 'HTML', 'CSS'], "https://github.com/SchrimpsMitReis/Sharkie---The-Shark"),
        new Project('PokeDex', "Wer kennt sie nicht? Die Welt der Pokémon, in der es darum geht, sie alle zu sammeln, zu tauschen und vor allem zu kämpfen. Mit meiner damaligen Internetgeschwindigkeit musste ich jedoch ebenfalls kämpfen, da diese das Programmieren dieser API-gestützten Seite unmöglich machte. Daher schrieb ich eine Installationsdatei, die es mir ermöglichte, die API-Inhalte herunterzuladen. Mittlerweile ist mein Internet schneller, aber die Installationsdatei habe ich behalten, da ich ziemlich stolz darauf bin.", ['JavaScript', 'HTML', "CSS"], "https://github.com/SchrimpsMitReis/Pokemon"),
        new Project('PizzaPinball', "Zweimal jährlich findet der Ludum Dare Game Jam statt, ein kleiner Wettbewerb, bei dem junge Programmierer und Spieleentwickler in drei Tagen ihr Können unter Beweis stellen. Zum Thema 'Delivery' hat meine alte Hochschulgruppe vom RheinAhrCampus in Remagen gemeinsam mit mir dieses Spiel entwickelt. Mein Beitrag umfasste unter anderem die Grafiken und 3D-Modelle, wie zum Beispiel den süßen kleinen Roboter.", ['Blender','Adobe Photoshop', 'Unity'], "https://github.com/RAC-Games/LD53-Delivery" )
    ]

        getProjects(): Project[]{
        return this.projects;
    }
}