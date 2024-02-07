import dotenv from 'dotenv'
dotenv.config()
import sequelize from '../../bin/db'
import User from '../../models/user'
import Address from '../../models/address'

beforeAll(async () => {
  await sequelize.sync() //sincroniza as tabelas antes de iniciar os testes
})

describe('User model', () => {
  test('Should create a new user', async () => {
    const addressDto = {
        "cep": "0238422",
        "street": "fake-street",
        "number": 450,
        "complement": "fake-complement",
        "city": "São paulo",
        "neighborhood": "vl sta virginia",
        "state": "São Paulo"
    }
    const address = new Address(addressDto)
    await address.save()
    const userDto = {
        "type": "Pessoa física",
        "cnpj": "1231341241",
        "cpf": "12312312",
        "name": "fake-name",
        "cellphone": "(11)99408-2490",
        "telephone": "(11)2401-2590",
        "email": "fake@email.com",
        "addressId": address?.dataValues.id
    }

    const user = new User(userDto)
    await user.save()
    expect(user).toBeDefined()
    expect(user).toEqual(expect.objectContaining(userDto))
  })
})
