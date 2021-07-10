export class User {
  constructor(
    public userName: string,
    public image: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token(): string | null {
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }

  getExpirationTicksLeft(): number {
    return this._tokenExpirationDate.getTime() - new Date().getTime();
  }
}
