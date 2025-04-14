<?php

namespace App\Helpers;

function transportWaresViaConveyor($quantityDelta, $placement_id)
{
    //TODO - open a serial port to the rpi's. Set baudrate. then use fopen or something to send to the psoc.
    //I think we jut need to send placement_id and quantityDelta (aka difference) negative for packing, positive for storing.
}

