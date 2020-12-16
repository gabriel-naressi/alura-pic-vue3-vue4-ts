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

    get url(): string {
        return this._url;
    }

    get descricao(): string {
        return this._descricao;
    }
}