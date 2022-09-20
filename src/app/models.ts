export interface Movie
{
    background_image: string;
    name: string;
    released: string;
    website:string;
    description:string;
    posters:Array<Poster>;
    ratings:Array<Rating>;


}
export interface APIResponse<T> // for dynamic type data base ;
{
    result:Array<T>;
}

  interface Rating{
    id:number;
    count:number;
      title:string;
  }
  interface Poster{
    image:string;
 }

 







