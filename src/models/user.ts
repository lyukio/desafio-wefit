import { DataTypes, Model, ModelStatic } from 'sequelize'
import Address from './address'
import sequelize from '../bin/db'

const userTypes = ["Pessoa física", "Pessoa jurídica"]

class User extends Model {
    static associate(models: { Address: ModelStatic<Model<any, any>> }) {
        User.hasOne(models.Address)
    }
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.ENUM(...userTypes),
        allowNull: false,
    },
    cnpj: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cellphone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    addressId: {
        type: DataTypes.INTEGER,
        references: {
            model: Address,
            key: "id"
        }
    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: true,
})

export default User