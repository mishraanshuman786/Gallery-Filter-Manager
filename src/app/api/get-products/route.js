import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

 export async function GET() {
     try {
        
         let filePath = path.join(process.cwd(), "src/json", "products.json");
         console.log("filePath: " + filePath);
    const jsonData = fs.readFileSync(filePath, "utf-8");

    // parsing the json data and send with response
    let data = JSON.parse(jsonData);

    return NextResponse.json(data, { statusCode: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: "Error Reading json File." }, { statusCode: 500 });
    }
}
