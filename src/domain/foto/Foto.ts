export class Foto {

    _id: string;
    private _titulo: string;
    private _url: string;
    private _descricao: string;

    constructor(id = '', titulo = '', url = '', descricao = '') {
        this._id = id;
        this._titulo = titulo;
        this._url = url;
        this._descricao = descricao;
    }

    get titulo(): string {
        return this._titulo;
    }

    set titulo(titulo: string) {
        this._titulo = titulo;
    }

    get url(): string {
        return this._url;
    }

    set url(url: string) {
        this._url = url;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(descricao: string) {
        this._descricao = descricao;
    }

}