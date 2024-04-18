import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { AppModule } from "./app.module"
import { config } from "dotenv"
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from "@nestjs/swagger"
import * as packageJSON from "../package.json"

config()

async function bootstrap() {

    const app = await NestFactory.create(AppModule)

    app.enableCors()

    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
        .setTitle("Cotação Dolar")
        .setDescription(packageJSON.description)
        .setContact(packageJSON.author, "https://aindanaotenho.com.br/", "marcusmigueell@gmail.com")
        .setVersion(packageJSON.version)
        .build()


    const customOptions: SwaggerCustomOptions = {
        customSiteTitle: "Cotação Dolar",
    }

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup("api-docs", app, document, customOptions)

    await app.listen(process.env.PORT)
}

bootstrap()