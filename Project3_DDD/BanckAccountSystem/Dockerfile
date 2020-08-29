#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["BanckAccountSystem/BanckAccountSystem.csproj", "BanckAccountSystem/"]
COPY ["BanckAccountSystem.AppService/BanckAccountSystem.AppService.csproj", "BanckAccountSystem.AppService/"]
COPY ["BanckAccountSystem.Repository/BanckAccountSystem.Repository.csproj", "BanckAccountSystem.Repository/"]
COPY ["BanckAccountSystem.Model/BanckAccountSystem.Model.csproj", "BanckAccountSystem.Model/"]
RUN dotnet restore "BanckAccountSystem/BanckAccountSystem.csproj"
COPY . .
WORKDIR "/src/BanckAccountSystem"
RUN dotnet build "BanckAccountSystem.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BanckAccountSystem.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BanckAccountSystem.dll"]