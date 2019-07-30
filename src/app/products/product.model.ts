export class Product {
  constructor(
    public authors: string,
    public title: string,
    public average_rating: number,
    public language_code: string,
    public ratings_count: number,
    public price: number,
    public isbn: number,
    public bookID: number,
    public id?: string
  ) { }
}
