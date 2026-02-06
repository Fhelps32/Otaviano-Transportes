<?php

namespace App\Http\Controllers;

use App\Mail\content;
use App\Mail\contentMail;
use App\Mail\expressoMail;
use App\Mail\rastreioMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;


class EmailController extends Controller
{
    public function sendCotacao(Request $request)
    {
        $data = $request->validate([
            'cepOrigem'   => 'required|string',
            'cepDestino'  => 'required|string',
            'cargaPeso'   => 'required|numeric|min:0',
            'cubagem'     => 'required|numeric|min:0',
            'qtdVolumes'  => 'required|integer|min:1',
            'valorNota'   => 'required|numeric|min:0',
            'tipo'        => 'required|string',
            'nome'        => 'required|string',
            'cpf'         => 'required|string',
            'email'       => 'required|email',
            'telefone'    => 'required|string',
        ]);

        Mail::to('lyipe32@gmail.com')->send(new contentMail($data));

        return response()->json([
            'success' => true,
            'message' => 'Email enviado com sucesso'
        ]);
    }
    public function sendExpresso(Request $request)
    {
        $data = $request->validate([
            'cepOrigem'   => 'required|string',
            'cepDestino'  => 'required|string',
            'cargaPeso'   => 'required|numeric|min:0',
            'valorNota'   => 'required|string|min:0',
            'email'       => 'required|email',
        ]);

        Mail::to('lyipe32@gmail.com')->send(new expressoMail($data));


        return response()->json([
            'success' => true,
            'message' => 'Email enviado com sucesso'
        ]);
    }
    public function sendRastreio(Request $request)
    {
        $data = $request->validate([
            'notaFiscal'   => 'required|string',
        ]);

        Mail::to('lyipe32@gmail.com')->send(new rastreioMail($data));
        return response()->json([
            'success' => true,
            'message' => 'Email enviado com sucesso'
        ]);
    }
}
