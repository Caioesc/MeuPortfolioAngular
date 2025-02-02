export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly JAVA = new Tag('Java', 'red');
    static readonly PYTHON = new Tag('Python', 'blue');
    static readonly HTML = new Tag('Html', 'orange');
    static readonly CSS = new Tag('CSS', 'blue');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'darkorange');
    static readonly NODEJS = new Tag('Node.JS', 'green');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'purple');
    static readonly REACT = new Tag('React','darkred');
    static readonly DJANGO = new Tag('Django','dargreen');
    static readonly EXPRESS = new Tag('Express','gray');


    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}
