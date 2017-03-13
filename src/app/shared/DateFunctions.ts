export class DateFunctions{


   static getDateFromYYYYMMDD(dateString:String):Date{
      var year        = dateString.substring(0,4);
      var month1       = dateString.substring(4,6);
      var day         = dateString.substring(6,8);

      return new Date(Number(year), Number(month1)-1, Number(day));
    }
     static getYYYYMMDD(fecha:Date):String{
     let month=(fecha.getMonth()+1).toString();
     let day=(fecha.getDate()).toString();;
      
      if(month.length==1)
          month="0"+month;


      if(day.length==1)
          day="0"+day;

      return fecha.getFullYear()+month+day
  }
   static getYYYYMM(fecha):String{
     
      return DateFunctions.getYYYYMMDD(fecha).substr(0,6)
  }


  static addMonth(date:Date,value:number):Date{
      date.setMonth(date.getMonth()+value);
      return date;
  }

}