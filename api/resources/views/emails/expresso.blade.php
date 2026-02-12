<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { 
            font-family: 'Segoe UI', Helvetica, Arial, sans-serif; 
            background-color: #f4f7fa; 
            margin: 0; 
            padding: 20px; 
            color: #334155; 
        }
        .container { 
            width: 100%; 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #ffffff; 
            border-radius: 12px; 
            overflow: hidden; 
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border: 1px solid #e2e8f0;
        }
        .header { 
            background-color: #1e293b; 
            padding: 20px; /* Reduzi o padding de 30 para 20 */
            text-align: center; 
        }
        .badge { 
            display: inline-block;
            background-color: #90a1b9; 
            color: #1e293b; 
            padding: 4px 16px; 
            border-radius: 20px; 
            font-size: 11px; 
            font-weight: bold; 
            text-transform: uppercase;
            margin-top: 10px; /* Espaço pequeno entre a logo e a badge */
        }
        .content { padding: 30px; }
        .greeting { 
            font-size: 16px; 
            color: #64748b; 
            margin: 0 0 20px 0; /* Removido margem superior e ajustado inferior */
            text-align: center;
        }
        .table { 
            width: 100%; 
            border-collapse: separate; 
            border-spacing: 0;
            background-color: #f8fafc;
            border-radius: 8px;
            overflow: hidden;
        }
        .table td { 
            padding: 14px 16px; /* Padding levemente menor */
            border-bottom: 1px solid #e2e8f0; 
        }
        .table tr:last-child td { border-bottom: none; }
        .label { 
            font-weight: 600; 
            color: #1e293b; 
            width: 40%; 
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .value { 
            color: #475569; 
            font-size: 15px; 
        }
        .footer { 
            background-color: #f1f5f9; 
            padding: 20px; 
            text-align: center; 
            font-size: 12px; 
            color: #94a3b8; 
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/X1TFNp8.png" alt="Logo Otaviano Transportes" style="max-width: 220px; display: block; margin: 0 auto;">
            <span class="badge">Cotação Expressa</span>
        </div>

        <div class="content">
            <p class="greeting">Uma nova solicitação de serviço recebida pelo portal.</p>
            
            <table class="table">
                <tr>
                    <td class="label">CEP Origem:</td>
                    <td class="value">{{ $data['cepOrigem'] }}</td>
                </tr>
                <tr>
                    <td class="label">CEP Destino:</td>
                    <td class="value">{{ $data['cepDestino'] }}</td>
                </tr>
                <tr>
                    <td class="label">Carga</td>
                    <td class="value">{{ $data['cargaPeso'] }} kg</td>
                </tr>
                <tr>
                    <td class="label">Nota Fiscal</td>
                    <td class="value" style="color: #059669; font-weight: bold;">
                        R$ {{ number_format($data['valorNota'], 2, ',', '.') }}
                    </td>
                </tr>
                <tr>
                    <td class="label">Contato</td>
                    <td class="value">{{ $data['email'] }}</td>
                </tr>
            </table>
        </div>

        <div class="footer">
            <p style="margin: 0;">&copy; {{ date('Y') }} Otaviano Transportes</p>
            <p style="margin: 5px 0 0;">Mensagem automática do sistema.</p>
        </div>
    </div>
</body>
</html>