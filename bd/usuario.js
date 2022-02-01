module.exports = (sequelize, Datatype) =>{
  const Ususario = sequelize.define(
    'usuario',
    {
      id:{
        type: Datatype.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome:{
        type: Datatype.STRING(200),
        allowNull: false,
      },
      email:{
        type: Datatype.STRING(200),
        allowNull: false,
      },
      senha:{
        type: Datatype.STRING(200),
        allowNull: false,
      },
    },
      {
        tableName: "usuario",
        timesTamps:false,
      }
    
  );
 return Ususario;
};