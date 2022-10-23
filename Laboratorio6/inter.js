function start_Int()
{
        if(intval=="")
        {
                intval=window.setInterval("start_clock()",1000);
        }
        else
        {
                stop_Int();
        }
}

function stop_Int()
{
        if(intval!="")
        {
                window.clearInterval(intval);
                intval="";
                document.formu.tiempo.value="Tiempo detenido";
        }
}