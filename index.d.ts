declare module '@editorjs/image/src' {
  export default class ImagePlugin {
    static pasteConfig: any;

    constructor(props: any);

    uploader: any;

    config: any;

    set ui(ui: any): any;

    get ui(): any;

    api: any;

    _data: any;

    get image(): any;

    set image(file: any);

    uploadFile(file: File);

    uploadUrl(url: string);

    uploadingFailed(error: any);
  }
}
