import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, phone } = await req.json();

    // Вебхук Bitrix24 (замени на свой, если потребуется)
    const webhookURL = 'https://call-intellect.bitrix24.ru/rest/11/hvibf14mn9mik133/crm.lead.add.json';

    // Формируем данные для Bitrix24
    const payload = {
      fields: {
        TITLE: 'Новый лид',
        NAME: name,
        LAST_NAME: 'Тестовый',
        EMAIL: [{ VALUE: 'test@example.com', VALUE_TYPE: 'WORK' }],
        PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
      },
    };

    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.error_description || 'Ошибка Bitrix24' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
} 