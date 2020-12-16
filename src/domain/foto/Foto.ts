export class Foto {

    private _titulo: string;
    private _url: string;
    private _descricao: string;

    constructor(titulo = '', url = '', descricao = '') {
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