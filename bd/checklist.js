module.exports = (sequelize, Datatype) =>{
  const Checklist = sequelize.define(
    'checklist',
    {
      id:{
        type: Datatype.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      notaId:{
        type: Datatype.INTEGER,
        allowNull: false,
        references:{
          model: 'nota',
          key:"id",
        }
      },
      descricao:{
        type: Datatype.TEXT,
        allowNull: false,
      },
      concluido:{
        type: Datatype.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "checklist",
      timesTamps:false,
    }
    
  );
 return Checklist;
};