export class Project {
    constructor(
        public title: string,
        public descriptionGer: string,
        public descriptionEng:string,
        public knowledge: string[],
        public gitLink: string | undefined,
    ){}
}