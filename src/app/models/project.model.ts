export class Project {
    constructor(
        public title: string,
        public description: string,
        public knowledge: string[],
        public gitLink: string = "https://github.com/SchrimpsMitReis",
    ){}
}