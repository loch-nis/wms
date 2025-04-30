<?php
namespace App\Services;

use App\Enums\Direction;

class UartService
{
    private string $uartPort = '/dev/serial0';
    private int $baudRate = 9600;
    private string $logFile = '/home/raspberrypi/log.txt';

    public function transportWaresViaConveyor(int $quantityDelta, int $placement_id) : void
    {
        $message = $this->buildMessage($quantityDelta, $placement_id);

        return; // Remove this return statement when on the Raspberry Pi

        $this->log($message);
        $this->configureUart();
        $this->writeToUart($message);
    }

    private function buildMessage(int $quantityDelta, int $placement_id) : string
    {
        $quantity = abs($quantityDelta);
        $direction = $quantityDelta > 0 ? Direction::In : Direction::Out;

        return "{$placement_id},{$quantity},{$direction->value}\n";
    }

    private function log(string $message) : void
    {
        file_put_contents($this->logFile, $message, FILE_APPEND);
    }

    private function configureUart() : void
    {
        // Sets the Raspberry Pi UART baudRate to 9600
        exec("stty -F {$this->uartPort} {$this->baudRate}");
    }

    private function writeToUart(string $message) : void
    {
        $fp = fopen($this->uartPort, 'w');
        if (!$fp) {
            $this->log("UART Error\n");
            return;
        }
        fwrite($fp, $message);
        fclose($fp);
    }
}
