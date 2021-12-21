// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
  async index() {
    return { response: "Index do Painel" };
  }
  async usuarios() {
    return { response: "Usuários do painel" };
  }
  async admin() {
    return { response: "Roda admin" };
  }
}
