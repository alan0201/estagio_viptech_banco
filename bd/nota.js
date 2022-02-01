module.exports = (sequelize, Datatype) => {
  const Nota = sequelize.define(
    'nota',
    {
      id:{
        type: Datatype.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      usuarioId:{
        type: Datatype.TEXT,
        allowNull: false,
        references:{
          model:'usuario',
          key:"id",
        }
      },
      titulo:{
        type: Datatype.STRING(100),
        allowNull: false,
      },
      descricao:{
        type: Datatype.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "nota",
      timesTamps:false,
    }

    
  );
 return Nota;
}