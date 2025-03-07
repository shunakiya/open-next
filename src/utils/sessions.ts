import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

type Payload = {
  userId: string;
  [key: string]: any;
};

type Session = string;

const secretKey: string | undefined = process.env.SESSION_SECRET;
const encodedKey: Uint8Array = new TextEncoder().encode(secretKey);

// function to create json web token
export async function encrypt(payload: Payload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

// decrypting payload
export async function decrypt(session: Session): Promise<Payload | undefined> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as Payload;
  } catch (error) {
    console.log("Failed to verify session.");
    return undefined;
  }
}

// session for cookie creation upon successful login
export async function createSession(userId: string): Promise<void> {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId });

  const cookieStore = await cookies();

  if (typeof cookieStore.set === "function") {
    cookieStore.set("session", session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });
  } else {
    console.error("Cookie set method not available");
  }
}
