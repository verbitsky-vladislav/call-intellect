import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, company, message } = body;

    // URL веб-хука Битрикс24
    const BITRIX_WEBHOOK_URL = 'https://call-intellect.bitrix24.ru/rest/11/hvibf14mn9mik133/';

    // Формируем URL с параметрами для создания лида
    const params = new URLSearchParams({
      'FIELDS[TITLE]': `Заявка с сайта: ${name}`,
      'FIELDS[NAME]': name,
      'FIELDS[PHONE][0][VALUE]': phone,
      'FIELDS[PHONE][0][VALUE_TYPE]': 'WORK'
    });

    // Добавляем email если есть
    if (email) {
      params.append('FIELDS[EMAIL][0][VALUE]', email);
      params.append('FIELDS[EMAIL][0][VALUE_TYPE]', 'WORK');
    }

    // Добавляем компанию если есть
    if (company) {
      params.append('FIELDS[COMPANY_TITLE]', company);
    }

    // Добавляем комментарий если есть
    if (message) {
      params.append('FIELDS[COMMENTS]', message);
    }

    // Добавляем источник
    params.append('FIELDS[SOURCE_ID]', 'WEB');

    // Отправка GET запроса в Битрикс24
    const response = await fetch(`${BITRIX_WEBHOOK_URL}crm.lead.add.json?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (result.result) {
      // Успешное создание лида
      console.log('Lead created successfully:', result.result);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Заявка успешно отправлена',
        leadId: result.result 
      });
    } else {
      // Ошибка при создании лида
      console.error('Error creating lead:', result.error);
      
      return NextResponse.json({ 
        success: false, 
        message: 'Ошибка при отправке заявки',
        error: result.error 
      }, { status: 400 });
    }

  } catch (error) {
    console.error('API error:', error);
    
    return NextResponse.json({ 
      success: false, 
      message: 'Внутренняя ошибка сервера' 
    }, { status: 500 });
  }
} 