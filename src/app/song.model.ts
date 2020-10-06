export class song{
  public songid:number;
  public songname:string;
  public songalbum:string;
  public songartist:string;
  public genre :string;
  public image:string;
  public releasedate:Date;

  constructor(sid:number,sname:string,salbum:string,sartist:string,genre:string,image:string,rdate:Date){
    this.songid=sid;
    this.songname=sname;
    this.songalbum=salbum;
    this.songartist=sartist;
    this.genre=genre;
    this.image=image;
    this.releasedate=rdate;
  }
}
