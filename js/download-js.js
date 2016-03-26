function DisplayProgressMessage(ctl, msg) {
            $(ctl).prop('disabled', true).text(msg);
            
            setTimeout(function (){
                $(".pdsa-submit-progress").removeClass("hidden");
            }, 0)
            
            
            $(".body-content").addClass("pdsa-submit-progress-bg")
            return true;
        };