"use server";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import nodemailer from "nodemailer";
import { z } from "zod";

dayjs.extend(utc);

const sendEmailSchema = z.object({
  name: z.string().min(1, "이름은 필수 입력입니다"),
  title: z.string().min(1, "제목은 필수 입력입니다"),
  email: z.string().min(1, "이메일은 필수 입력입니다"),
  content: z.string().min(1, "내용은 필수 입력입니다"),
});

export async function sendEmail(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) {
  const raw = {
    name: formData.get("name"),
    title: formData.get("title"),
    email: formData.get("email"),
    content: formData.get("content"),
  };

  const validated = sendEmailSchema.safeParse(raw);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR",
      message: validated.error.issues[0].message,
    };
  }

  const { name, title, content, email } = validated.data;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_MAILER_HOST,
      port: Number(process.env.NEXT_PUBLIC_MAILER_PORT),
      secure: Number(process.env.NEXT_PUBLIC_MAILER_PORT) === 465,
      auth: {
        user: process.env.NEXT_PUBLIC_MAILER_USER,
        pass: process.env.NEXT_PUBLIC_MAILER_KEY,
      },
    });

    const createdTime = dayjs()
      .utc()
      .add(9, "hour")
      .format("YYYY-MM-DD HH:mm:ss");

    await transporter.sendMail({
      from: `"련철박 포폴 알림봇" <${process.env.NEXT_PUBLIC_MAILER_USER}>`,
      to: process.env.NEXT_PUBLIC_MAILER_ADMIN,
      subject: `[련철박] 새 문의: ${title}`,
      html: `
        <div style="font-family: Arial; line-height:1.6;">
          <h2 style="color:#13BA81">문의제목 : ${title}</h2>
          <h2 style="color:#13BA81">문의자 : ${name}</h2>
          <h2 style="color:#13BA81">문의 이메일 : ${email}</h2>
          <p style="font-size:20px; color:#212121;">내용 : ${content}</p>
          <span style="font-size:14px; color:#424242;">문의시간 : ${createdTime}</span>
        </div>
      `,
    });
  } catch (err) {
    console.error("메일 발송 실패:", err);
    return {
      code: "ERROR",
      message: "메일 발송 중 문제가 발생했습니다.",
    };
  }

  return {
    code: "SUCCESS",
    message: "작성이 완료되었습니다.",
  };
}
