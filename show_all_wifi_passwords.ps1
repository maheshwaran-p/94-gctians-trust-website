$profiles=@()
$profiles+=(netsh wlan show profiles) |Select-String "\:(.+)$" | Foreach{$_. Matches.Groups[1].Value.Trim()}
$profiles| Foreach{$SSID=$_;(netsh  wlan show profile name="$_" key=clear)} |
      Select-String "key Content\w+\:(.+)$" |
          
          Foreach{$Pass=$_.Matches.Groups[1].value.Trim();$_} | 
            Foreach{[PSCustomObject]@{wireless_network_Name=$SSID;Password=$pass}}
              Format-Table -AutoSize

              Start-Sleep -s 20