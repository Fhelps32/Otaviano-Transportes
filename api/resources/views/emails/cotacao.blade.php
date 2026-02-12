<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 20px; color: #334155; }
        .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0; }
        .header { background-color: #1e293b; padding: 20px; text-align: center; }
        .badge { display: inline-block; background-color: #90a1b9; color: #1e293b; padding: 4px 16px; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-top: 10px; }
        .content { padding: 30px; }
        .section-title { font-size: 12px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin: 20px 0 10px 0; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px; }
        .table { width: 100%; border-collapse: separate; border-spacing: 0; background-color: #f8fafc; border-radius: 8px; overflow: hidden; }
        .table td { padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
        .table tr:last-child td { border-bottom: none; }
        .label { font-weight: 600; color: #1e293b; width: 40%; }
        .value { color: #475569; }
        .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/X1TFNp8.png" alt="Logo Otaviano" style="max-width: 220px; display: block; margin: 0 auto;">
            <span class="badge">Cotação Padrão</span>
        </div>
        <div class="content">
            <div class="section-title">Informações da Carga</div>
            <table class="table">
                <tr><td class="label">Origem/Destino:</td><td class="value">{{ $data['cepOrigem'] }} ➔ {{ $data['cepDestino'] }}</td></tr>
                <tr><td class="label">Peso Total:</td><td class="value">{{ $data['cargaPeso'] }} kg</td></tr>
                <tr><td class="label">Cubagem:</td><td class="value">{{ $data['cubagem'] }}</td></tr>
                <tr><td class="label">Volumes:</td><td class="value">{{ $data['qtdVolumes'] }} unidades</td></tr>
                <tr><td class="label">Valor NF:</td><td class="value" style="color:#059669; font-weight:bold;">R$ {{ number_format($data['valorNota'], 2, ',', '.') }}</td></tr>
                <tr><td class="label">Tipo de Carga:</td><td class="value">{{ $data['tipo'] }}</td></tr>
            </table>

            <div class="section-title">Dados do Solicitante</div>
            <table class="table">
                <tr><td class="label">Nome:</td><td class="value">{{ $data['nome'] }}</td></tr>
                <tr><td class="label">CPF/CNPJ:</td><td class="value">{{ $data['cpf'] }}</td></tr>
                <tr><td class="label">E-mail:</td><td class="value">{{ $data['email'] }}</td></tr>
                <tr><td class="label">Telefone:</td><td class="value">{{ $data['telefone'] }}</td></tr>
            </table>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} Otaviano Transportes - Sistema de Cotações</p>
        </div>
    </div>
</body>
</html>