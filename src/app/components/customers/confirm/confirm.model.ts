export class ConfirmDialogModel {
  constructor(
      public title: string,
      public message: string,
      public warning?: boolean,
      public backup?: boolean,
  ) {
  }
}
