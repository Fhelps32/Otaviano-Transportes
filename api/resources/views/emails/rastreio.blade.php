<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 20px; text-align: center; }
        .container { width: 100%; max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0; }
        .header { background-color: #1e293b; padding: 25px; }
        .content { padding: 40px 30px; justify-content: center; text-align: center;}
        .nf-box { background-color: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 20px; margin: 20px 0; justify-content: center; text-align: center;}
        .nf-label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; justify-content: center; text-align: center;}
        .nf-number { font-size: 28px; font-weight: bold; color: #2563eb; margin: 0; justify-content: center; text-align: center;}
        .footer { background-color: #f1f5f9; padding: 20px; font-size: 12px; color: #94a3b8; }
        .btn { display: inline-block; background-color: #1e293b; color: #ffffff !important; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/X1TFNp8.png" alt="Logo Otaviano" style="max-width: 220px; display: block; margin: 0 auto;">
        </div>
        <div class="content">
            <h2 style="margin: 0; color: #1e293b;">Solicitação de Rastreio</h2>
            <p style="color: #64748b;">Uma nova consulta de carga foi realizada com a nota abaixo:</p>
            
            <div class="nf-box">
                <div class="nf-label">Número da Nota Fiscal</div>
                <h1 class="nf-number">{{ $data['notaFiscal'] }}</h1>
            </div>
        </div>
        <div class="footer">
            <p style="margin: 0;">&copy; {{ date('Y') }} Otaviano Transportes</p>
        </div>
    </div>
</body>
</html>