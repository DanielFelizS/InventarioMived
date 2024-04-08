El proyecto fue creado utilizando asp.net core, SQL Server y React js.

Para abrir el proyecto se necesita tener instalado las siguientes herramientas:

Node js. Para instarlo: https://nodejs.org/en/download o abra el instalador que le hemos pasado

React. Para instalarlo: Después de haber instalado node.js escriba el siguente comando en su terminal: npm i react

.Net Core. Para instalarlo: https://dotnet.microsoft.com/en-us/download/dotnet o habra el instalador que le hemos pasado

SQL Server. Para instalarlo: les pasaremos el instalador

Para ejecutar el proyecto debe hacer los siguientes pasos:
Abra 2 terminales y ejecute el servidor local y la aplicación:

servidor local: cd Inventario MIVED/Api_rest/inventario (pulse enter y luego escriba el otro comando) ->  dotnet run
aplicación: cd Inventario MIVED/inventario2.0 (pulse enter y luego escriba el otro comando) -> npm run dev 

Luego debe acceder a la siguiente ruta: Inventario MIVED/Api_rest/inventario
1- luego abra el archivo llamado appsettings.json (NO ABRA appsettings.Development.json)
Ubiquese donde dice:

 "mssql.connections": [
  {
    "server": "COLOQUE AQUI EL SERVIDOR LOCAL DE SU EQUIPO",
    "database": "Inventario",
    "options": {
      "encrypt": true,
      "trustServerCertificate": true
    }
  }

Más arriba realice lo mismo:
    "DefaultConnection": "Data Source=NOMBRE DEL SERVIDOR DE SU EQUIPO ;Initial Catalog=Inventario;Integrated Security=True;TrustServerCertificate=True;"
 },

En el mismo archivo en la sección "JwtSettings" modifique los siguientes parámetros. NOTA en los parentesis y los textos que hay en ellos debe borrarlos:

     "ValidIssuer": "NOMBRE DEL SERVIDOR LOCAL DE LA APLICACION(dotnet run)",
      "ValidAudience": "EL SERVIDOR LOCAL PARA EJECUTAR LA APLICACION(npm run dev)"     
    },

Por último debe abrir el archivo program.cs (último archivo al entrar a la ruta: Inventario MIVED/Api_rest/inventario).NOTA los parentesis y el texto que hay en ellos debe borrarlos:

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy", policy =>
    {
        policy.WithOrigins("EL SERVIDOR LOCAL PARA EJECUTAR LA APLICACION(npm run dev)")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithHeaders("Authorization"); 
    });
});
