#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["BankAccountSystem/BankAccountSystem.csproj", "BankAccountSystem/"]
COPY ["BankAccountSystem.AppService/BankAccountSystem.AppService.csproj", "BankAccountSystem.AppService/"]
COPY ["BankAccountSystem.Repository/BankAccountSystem.Repository.csproj", "BankAccountSystem.Repository/"]
COPY ["BankAccountSystem.Model/BankAccountSystem.Model.csproj", "BankAccountSystem.Model/"]
RUN dotnet restore "BankAccountSystem/BankAccountSystem.csproj"
COPY . .
WORKDIR "/src/BankAccountSystem"
RUN dotnet build "BankAccountSystem.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BankAccountSystem.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BankAccountSystem.dll"]