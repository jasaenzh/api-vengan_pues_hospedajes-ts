import { NextApiRequest, NextApiResponse } from "next";


// Importo la conexion a la base de datos
import connectMongo from "../../../database/conn"
import { hash } from "bcryptjs"
import User, { IUser, ProfileType } from "../../../model/User";
import { HydratedDocument } from "mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method, body } = req

    //Conectando a la base de datos
    await connectMongo().catch(err => res.json({ error: "Error al conectar a la base de datos" }))

    //Swithcando el metodo de la peticion
    switch (req.method) {
        case "GET":
            return res.status(200).json("Ok")
        case "POST":
            if (!req.body) return res.status(404).json({ error: "No se recibieron datos" })

            const { username, email, password, profile } = body

            const newUser: HydratedDocument<IUser> = new User(body)

            // Validar si el usuario esta duplicado
            const checkUserExisting = await User.findOne({ email })
            if (checkUserExisting) return res.status(422).json({ error: "El usuario ya existe" })

            // Encriptando la contraseña
            try {
                // const user = await User.create({ username, email, password: await hash(password, 12) });
                // return res.status(201).json({ status: true, user });

                const hashedPassword = await hash(password, 12)
                newUser.set({
                    username,
                    email,
                    password: hashedPassword,
                    profile: profile || ProfileType.User,
                })

                await newUser.save()

                return res.status(201).json({ status: true, user: newUser });

            } catch (err) {
                return res.status(404).json({ msg: "Error al crear el usuario", err })
            }

        default:
            return res.status(405).json({ error: "Metodo no permitido" })
    }

}