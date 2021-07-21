export class Banner {

  constructor (
    private _backgroundPath: string,
    private _text: string,
    private _subText: string,
    private _href: string,
    private _imagePath: string,
    private _alternativeText: string,
    private _buttonText: string
  ) {}

  public set setText(text: string) { this._text = text ? text : ""; }

  public get getText(): string { return this._text; }

  public set setBackgroundPath(backgroundPath: string) { this._backgroundPath = backgroundPath ? backgroundPath : ""; }

  public get getBackgroundPath() { return this._backgroundPath; }

  public set setSubText(subText: string) { this._subText = subText ? subText : ""; }

  public get getSubText() { return this._subText; }

  public set setHref(href: string) { this._href = href ? href : '#'; }

  public get getHref() { return this._href; }

  public set setImagePath(imagePath: string) { this._imagePath = imagePath ? imagePath : ''; }

  public get getImagePath() { return this._imagePath; }

  public set setAlternativeText(alternativeText: string) { this._alternativeText = alternativeText ? alternativeText : ''; }

  public get getAlternativeText() { return this._alternativeText; }

  public set setButtonText(buttonText: string) { this._buttonText = buttonText ? buttonText : '';}

  public get getButtonText() { return this._buttonText; }


}
