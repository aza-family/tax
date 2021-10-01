export interface EditorState {
  //imageIndex: number;
  images: [];
  options: OptionsState;
  //canvasDom: any;
}

export interface OptionsState {
  imageIndex: number;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  fontWeight: string;
  text: string;
  textBorder: string;
}

export interface RootState {
  version: string;
}
