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
            'cargaPeso'   => 'required|string',
            'cubagem'     => 'required|string',
            'qtdVolumes'  => 'required|string',
            'valorNota'   => 'required|string',
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
            'cargaPeso'   => 'required|string',
            'valorNota'   => 'required|string',
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
