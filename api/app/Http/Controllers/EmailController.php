<?php

namespace App\Http\Controllers;

use App\Mail\content;
use App\Mail\contentMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send(Request $request)
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
}
