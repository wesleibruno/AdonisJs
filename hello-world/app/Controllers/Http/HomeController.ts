// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  async index({ view }) {
    //return view.render("welcome");
    return "hello World";
  }
}
