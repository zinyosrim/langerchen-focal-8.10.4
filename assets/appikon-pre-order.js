/*==============================================================================
# WARNING: This file is auto-generated and any changes that are made may be lost.
==============================================================================*/

(function() {
  var head = document.getElementsByTagName('head')[0];
  var startingTime = new Date().getTime();

  if (typeof jQuery == 'undefined') {
    var jQueryScript = document.createElement('script');
    jQueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    jQueryScript.type = 'text/javascript';
    head.appendChild(jQueryScript);
  }

  if (typeof Mustache == 'undefined') {
    var mustacheScript = document.createElement('script');
    mustacheScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.1.0/mustache.js';
    mustacheScript.type = 'text/javascript';
    head.appendChild(mustacheScript);
  }

  // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            console.log("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });

})();

function deferJquery(method) {
  if (window.jQuery)
      method();
  else
      setTimeout(function() { deferJquery(method) }, 50);
}

function deferBisProductPageButton (callback) {
  if (jQuery('#PO_trigger').length) {
    callback();
  } else {
    setTimeout(function() {
      deferBisProductPageButton(callback);
    }, 50);
  }
}


(function () {
    var popupFormTemplate = `<!doctype html><!--[if lt IE 7]>
<html class="ie6">
   <![endif]--><!--[if IE 7]>
   <html class="ie7">
      <![endif]--><!--[if IE 8]>
      <html class="ie8">
         <![endif]--><!--[if gt IE 8]><!-->
         <html>
            <!--<![endif]-->
            <head>
               <link rel='stylesheet' href="https://fonts.googleapis.com/css?family={{ popup_theme.text_font_name }}" />
               <meta name="viewport" content="width=device-width">
               <style> {{{styles}}} {{{ popup_theme.signup_form_custom_css }}} {{#popup_theme}} #container { font-family: {{ popup_theme.text_font_name}}, sans-serif; background: {{ popup_theme.background_color }}; border-color: {{ popup_theme.border_color }}; border-width: {{ popup_theme.border_width }}px; border-style: solid; } body { color: {{ popup_theme.text_color }}; } body.fadein { background: rgba( {{ popup_theme.fade_color_rgb }}, 0.65); } #submit-btn { color: {{ popup_theme.button_text_color }}; background-color: {{ popup_theme.button_background_color }}; border-color: {{ popup_theme.button_background_color }}; border-radius: {{ popup_theme.button_corner_radius }}px; } .input-lg { border-radius: {{ popup_theme.input_border_radius }}px; border-color: {{ popup_theme.input_border_color }}; border-width: {{ input_border_width }}px;  }  .close { color: {{ popup_theme.close_button_color }}; } .alert-danger { border-color: {{ popup_theme.failure_background_color }}; background-color: {{ popup_theme.failure_background_color }}; color: {{ popup_theme.failure_text_color }}; } .alert-success { background-color: {{ popup_theme.success_background_color }}; border-color: {{ popup_theme.success_background_color }}; color: {{ popup_theme.success_text_color }}; } .alert-success a { color: {{ popup_theme.success_text_color }}; } {{/popup_theme}}
   .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  .appikon-bis-form-hide-warning{
    display:none
}
.appikon-bis-form-warning{
     color:red
}

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }



  .slider.round:before {
    border-radius: 50%;
  }</style>
               {{#show_phone_number_field}}
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.5/css/intlTelInput.css" integrity="sha256-rTKxJIIHupH7lFo30458ner8uoSSRYciA0gttCkw1JE=" crossorigin="anonymous" />
               {{/show_phone_number_field}}
            </head>
            <body class="action-close">
               <div id="POModal" class="">
                  <div class="" id="container">
                     <button type="button" class="close action-close" data-dismiss="modal">&times;</button>
                     <h3 class="modal-title">{{headline}}</h3>
                     <p>{{body_copy}}</p>
                     <hr>
                     <h4 class="product-name">{{{product.title}}}</h4>
                     <form action="#" class="form-horizontal clearfix">
                        <div id="variant-select-container">
                           <div class="form-group {{#single_variant_product}}single_variant_product_select{{/single_variant_product}}">
                              <div class="col-xs-12">
                                 <select id="variants" class="selectpicker form-control input-lg {{#is_default_variant}}default_variant{{/is_default_variant}} {{#single_variant_product}}single_variant_product{{/single_variant_product}}">
                                    {{#unavailableVariants}}
                                    <option value="{{id}}">{{title}}</option>
                                    {{/unavailableVariants}}
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div id="customer-contact-container">
                          {{#show_phone_number_field}}
                            {{^only_sms_enabled}}
                              <div class="form-group">
                                <div class="col-xs-12 btn-group btn-group-justified">
                                  {{#show_sms_first}}
                                    <div class="btn-group"> <button type="button" class="btn btn-success" id="sms-tab">{{ sms_tab_text }}</button> </div>
                                    <div class="btn-group"> <button type="button" class="btn btn-default" id="email-tab">{{ email_tab_text }}</button> </div>
                                  {{/show_sms_first}}
                                  {{^show_sms_first}}
                                    <div class="btn-group"> <button type="button" class="btn btn-success" id="email-tab">{{ email_tab_text }}</button> </div>
                                    <div class="btn-group"> <button type="button" class="btn btn-default" id="sms-tab">{{ sms_tab_text }}</button> </div>
                                  {{/show_sms_first}}
                                </div>
                              </div>
                            {{/only_sms_enabled}}
                          {{/show_phone_number_field}}

                          {{#show_phone_number_field}}
                            <div id="phone-number" class="form-group {{^only_sms_enabled}}{{^show_sms_first}}hidden{{/show_sms_first}}{{/only_sms_enabled}}">
                              <div class="col-xs-12">
                                 <input id="appikon-bis-popup-form-phone-no" type="number" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class="form-control input-lg" value="{{customer.phone}}">
                              </div>
                            </div>
                          {{/show_phone_number_field}}

                          {{^only_sms_enabled}}
                            <div id="email-address" class="form-group {{#show_sms_first}}hidden{{/show_sms_first}}">
                              <div class="col-xs-12">
                                <input id="appikon-bis-popup-form-email" type="email" placeholder="{{email_address_label}}" class="form-control input-lg" value="{{customer.email}}">
                                <small class="appikon-bis-form-hide-warning" id="appikon-bis-form-email-warning">{{email_invalid}}</small>
                              </div>
                            </div>
                          {{/only_sms_enabled}}

                           {{#push_owl_enabled}}
                           <div id="send_to_push_owl" class="form-group">
                              <div class="col-xs-12">
                                <h6><b>{{push_notification_label}}</b></h6>
                                <label class="switch">
                                  <input id="enable_push_notification" type="checkbox" />
                                  <span class="slider round"></span>
                                </label>
                              </div>
                            </div>
                            {{/push_owl_enabled}}

                           {{#show_fb}}
                           <div id="fb-share-to-messenger-container" class="form-group">
                              <div class="col-xs-12">
                                 <h6><b>{{ fb_instruction_message }}</b></h6>
                                 <div id="fb-share-to-messenger-sub-container"></div>
                              </div>
                           </div>
                           <div id="fb-root"></div>
                           <script> window.fbAsyncInit = function () { FB.init({ appId: '2440781236012932', autoLogAppEvents: false, xfbml: true, version: 'v4.0' }); afterFBInit(); }; (function () { var script = document.createElement('script'); script.src = document.location.protocol + '//connect.facebook.net/{{fb_cta_button_language}}/sdk.js'; script.async = true; document.getElementById('fb-root').appendChild(script); }()); function afterFBInit() { (function () { var variantsDropdown = document.getElementById("variants"); variantsDropdown.onchange = function () { reloadFBWidget(); }; }()); var reloadFBWidget = function () { var variantsDropdown = document.getElementById("variants"); var selectedIndex = variantsDropdown.selectedIndex; if (selectedIndex == null) { console.log('selected index is null.'); return; } var selectedVariantId = variantsDropdown.options[selectedIndex].value; var sendToMessengerElement = document.createElement("div"); sendToMessengerElement.setAttribute("cta_text", "{{fb_cta_button_text}}"); sendToMessengerElement.setAttribute("class", "fb-send-to-messenger"); sendToMessengerElement.setAttribute("messenger_app_id", "2440781236012932"); sendToMessengerElement.setAttribute("page_id", "{{fb_page_id}}"); sendToMessengerElement.setAttribute("data-ref", selectedVariantId + '_fbd_' + '{{shop_myshopify_domain}}' + '_fbd_' + '{{product.id}}'); sendToMessengerElement.setAttribute("size", "large"); sendToMessengerElement.setAttribute("color", 'blue'); var fbShareToMessengerSubContainer = document.getElementById('fb-share-to-messenger-sub-container'); fbShareToMessengerSubContainer.innerHTML = ''; fbShareToMessengerSubContainer.appendChild(sendToMessengerElement); FB.XFBML.parse(); }; reloadFBWidget(); } </script>
                           {{/show_fb}}

                        </div>
                        {{#show_phone_number_field}} <script> var emailButton, smsButton; var phoneNumberDiv = document.querySelector('#phone-number'); var emailAddressDiv = document.querySelector('#email-address'); [emailButton, smsButton] = document.querySelectorAll('#customer-contact-container .btn-group > button'); var toggleContactForm = function() { /* Hide one of the contact forms and show the other */ phoneNumberDiv.classList.toggle('hidden'); emailAddressDiv.classList.toggle('hidden'); /* Disable SMS button and activate Email button */ smsButton.classList.toggle('btn-default'); smsButton.classList.toggle('btn-success'); smsButton.classList.toggle('active'); emailButton.classList.toggle('btn-default'); emailButton.classList.toggle('btn-success'); emailButton.classList.toggle('active'); }; emailButton.addEventListener('click', toggleContactForm); smsButton.addEventListener('click', toggleContactForm); </script> {{/show_phone_number_field}}
                        {{#quantity_field_enabled}}
                          <div id="quantity-field-container">
                             <div class="form-group form-group-lg">
                                <label class="col-xs-offset-3 col-xs-5 control-label" for="quantity_required"> {{quantity_required_label}} </label>
                                <div class="col-xs-4"> <input type="number" id="quantity_required" min="1" max="9999" value="1" step="1" class="form-control text-right"> </div>
                             </div>
                          </div>
                        {{/quantity_field_enabled}}
                        {{> accepts_marketing}}
                        {{> recaptcha }}
                        <div class="form-group">
                           <div class="col-xs-12"> <button type="submit" id="submit-btn" class="btn btn-success btn-lg btn-block"> {{button_label}} </button> </div>
                        </div>
                        <div id="message_holder"></div>
                        <div class="completed_message alert alert-success"> {{{registration_complete}}} <a href="#" class="action-close">{{ close_label }}</a> </div>

                        <!-- Default unchecked -->
                        {{#newsletter_permission_enabled}}
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" name="customer_accepts_marketing"  id="customer_accepts_marketing" {{#newsletter_permission_default_checked}}checked{{/newsletter_permission_default_checked}}>
                          <label class="custom-control-label" for="customer_accepts_marketing">{{newsletter_permission_text}}</label>
                        </div>
                        {{/newsletter_permission_enabled}}
                     </form>

                     <p class="small-print">{{footer_copy}}</p>
                     {{#madeby_link_visible}}
                     <p class="small-print text-right"> Powered by <a href="https://apps.shopify.com/customer-back-in-stock-alert-user-notification-app/?utm_source=referral&utm_medium=powered-by&utm_campaign={{shop_myshopify_domain}}" target="_blank">Back In Stock (by Appikon)</a> </p>
                     {{/madeby_link_visible}}
                  </div>
               </div>


               {{{ content_for_body}}}
               <script>
                  const submitButton=document.getElementById('submit-btn');
                  const emailField=document.getElementById('appikon-bis-popup-form-email')
                  const smsField=document.getElementById('appikon-bis-popup-form-phone-no')
                  const emailFieldWarningElement=document.getElementById('appikon-bis-form-email-warning');
                  emailField.addEventListener("change", function() {
                                var appikonBisPopUpFormEmail = emailField.value;
                                const emailPattern = /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/; //email simple pattern
                                if (!emailPattern.test(appikonBisPopUpFormEmail)) {
                                    emailFieldWarningElement.classList.remove("appikon-bis-form-hide-warning")
                                    emailFieldWarningElement.classList.add("appikon-bis-form-warning");
                                    submitButton.setAttribute('disabled','true');
                                } else {
                                    emailFieldWarningElement.classList.remove("appikon-bis-form-warning")
                                    emailFieldWarningElement.classList.add("appikon-bis-form-hide-warning");
                                    submitButton.removeAttribute('disabled','true');
                                }
                  })

                   document.getElementById("sms-tab").addEventListener("click", function() {
                        submitButton.removeAttribute('disabled');
                        emailField.value = "";
                        emailFieldWarningElement.classList.add("appikon-bis-form-hide-warning");
                        emailFieldWarningElement.classList.remove("appikon-bis-form-warning")
                  })
                   document.getElementById("email-tab").addEventListener("click", function() {
                        submitButton.removeAttribute('disabled');
                        smsField.value = "";
                  })
                </script>
            </body>
         </html>`;


    var cssReset = ".si-reset>div{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:normal;font:normal normal 100% \"Helvetica Neue\", Helvetica, Arial, sans-serif;text-align:left;text-align-last:start;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;alignment-adjust:auto;alignment-baseline:baseline;-webkit-animation:none 0 ease 0 1 normal;-moz-animation:none 0 ease 0 1 normal;-ms-animation:none 0 ease 0 1 normal;animation:none 0 ease 0 1 normal;-webkit-animation-play-state:running;-moz-play-state:running;-ms-animation-play-state:running;animation-play-state:running;appearance:normal;azimuth:center;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;binding:none;bleed:6pt;bookmark-label:content();bookmark-level:none;bookmark-state:open;bookmark-target:none;border:0 none transparent;border-radius:0;bottom:auto;box-align:stretch;box-decoration-break:slice;box-direction:normal;box-flex:0.0;box-flex-group:1;box-lines:single;box-ordinal-group:1;box-orient:inline-axis;box-pack:start;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;break-after:auto;break-before:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;-webkit-column-count:auto;-webkit-column-fill:balance;-webkit-column-gap:normal;-webkit-column-rule:medium medium #1f1f1f;-webkit-column-span:1;-webkit-column-width:auto;-webkit-columns:auto auto;-moz-column-count:auto;-moz-column-fill:balance;-moz-column-gap:normal;-moz-column-rule:medium medium #1f1f1f;-moz-column-span:1;-moz-column-width:auto;-moz-columns:auto auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium medium #1f1f1f;column-span:1;column-width:auto;columns:auto auto;content:normal;counter-increment:none;counter-reset:none;crop:auto;cursor:auto;direction:ltr;display:inline;dominant-baseline:auto;drop-initial-after-adjust:text-after-edge;drop-initial-after-align:baseline;drop-initial-before-adjust:text-before-edge;drop-initial-before-align:caps-height;drop-initial-size:auto;drop-initial-value:initial;elevation:level;empty-cells:show;fit:fill;fit-position:0% 0%;float:none;float-offset:0 0;grid-columns:none;grid-rows:none;hanging-punctuation:none;height:auto;hyphenate-after:auto;hyphenate-before:auto;hyphenate-character:auto;hyphenate-lines:no-limit;hyphenate-resource:none;hyphens:manual;icon:auto;image-orientation:auto;image-rendering:auto;image-resolution:normal;inline-box-align:last;left:auto;line-height:inherit;line-stacking:inline-line-height exclude-ruby consider-shifts;list-style:disc outside none;margin:0;marks:none;marquee-direction:forward;marquee-loop:1;marquee-play-count:1;marquee-speed:normal;marquee-style:scroll;max-height:none;max-width:none;min-height:0;min-width:0;move-to:normal;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:invert none medium;outline-offset:0;overflow:visible;overflow-style:auto;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;page-policy:start;perspective:none;perspective-origin:50% 50%;position:static;presentation-level:0;punctuation-trim:none;quotes:none;rendering-intent:auto;resize:none;right:auto;rotation:0;rotation-point:50% 50%;ruby-align:auto;ruby-overhang:none;ruby-position:before;ruby-span:none;size:auto;string-set:none;table-layout:auto;top:auto;-webkit-transform:none;-moz-transform:none;transform:none;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:all 0 ease 0;-moz-transition:all 0 ease 0;-o-transition:all 0 ease 0;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;white-space:normal;white-space-collapse:collapse;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;text-align:start;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(enabled=false)\";filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.si-reset{z-index:999999}.si-reset div{display:block}.si-reset .si-button{cursor:pointer;text-shadow:1px 1px 0 rgba(0,0,0,0.2);-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:none}.si-reset.si-edge-left,.si-reset.si-edge-right{transform-origin:left bottom;white-space:nowrap;position:fixed}.si-reset.si-edge-left{left:0}.si-reset.si-edge-right{right:0}.si-reset.si-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-webkit-transform-origin:left bottom;-moz-transform:rotate(90deg);-moz-transform-origin:left bottom;-ms-transform:rotate(90deg);-ms-transform-origin:left bottom;-o-transform:rotate(90deg);-o-transform-origin:left bottom;transform:rotate(90deg)}.si-reset.si-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-webkit-transform-origin:100% 100%;-moz-transform:rotate(270deg);-moz-transform-origin:100% 100%;-ms-transform:rotate(270deg);-ms-transform-origin:100% 100%;-o-transform:rotate(270deg);-o-transform-origin:100% 100%;transform:rotate(270deg)}.si-reset.si-edge-bottom{position:fixed;bottom:0}.si-reset img{display:block;cursor:pointer}.si-reset.preview{position:absolute !important}.si-reset .si-button.with-si-image{-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none;-ms-filter:none;filter:none}\n";

    function loadScript(t, e, n) {
      var i = (e = void 0 !== e ? e : document).getElementsByTagName("head")[0]
        , r = e.createElement("script");
      r.type = "text/javascript",
        r.src = t,
        r.onreadystatechange = n,
        r.onload = n,
        i.appendChild(r)
    }

    !function (t, e) {
      "object" == typeof exports && exports && "string" != typeof exports.nodeName ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : (t.Mustache = {},
        e(t.Mustache))
    }(this, function (t) {
      function e(t) {
        return "function" == typeof t
      }

      function n(t) {
        return m(t) ? "array" : typeof t
      }

      function i(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      }

      function r(t, e) {
        return null != t && "object" == typeof t && e in t
      }

      function o(t, e) {
        return null != t && "object" != typeof t && t.hasOwnProperty && t.hasOwnProperty(e)
      }

      function s(t, e) {
        return v.call(t, e)
      }

      function a(t) {
        return !s(y, t)
      }

      function u(t) {
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
          return S[t]
        })
      }

      function l(e, n) {
        function r() {
          if (v && !y)
            for (; g.length;)
              delete f[g.pop()];
          else
            g = [];
          v = !1,
            y = !1
        }

        function o(t) {
          if ("string" == typeof t && (t = t.split(b, 2)),
          !m(t) || 2 !== t.length)
            throw new Error("Invalid tags: " + t);
          s = new RegExp(i(t[0]) + "\\s*"),
            u = new RegExp("\\s*" + i(t[1])),
            l = new RegExp("\\s*" + i("}" + t[1]))
        }

        if (!e)
          return [];
        var s, u, l, d = [], f = [], g = [], v = !1, y = !1;
        o(n || t.tags);
        for (var S, k, E, C, x, P, T = new p(e); !T.eos();) {
          if (S = T.pos,
            E = T.scanUntil(s))
            for (var N = 0, D = E.length; N < D; ++N)
              a(C = E.charAt(N)) ? g.push(f.length) : y = !0,
                f.push(["text", C, S, S + 1]),
                S += 1,
              "\n" === C && r();
          if (!T.scan(s))
            break;
          if (v = !0,
            k = T.scan(w) || "name",
            T.scan(_),
            "=" === k ? (E = T.scanUntil(I),
              T.scan(I),
              T.scanUntil(u)) : "{" === k ? (E = T.scanUntil(l),
              T.scan(B),
              T.scanUntil(u),
              k = "&") : E = T.scanUntil(u),
            !T.scan(u))
            throw new Error("Unclosed tag at " + T.pos);
          if (x = [k, E, S, T.pos],
            f.push(x),
          "#" === k || "^" === k)
            d.push(x);
          else if ("/" === k) {
            if (!(P = d.pop()))
              throw new Error('Unopened section "' + E + '" at ' + S);
            if (P[1] !== E)
              throw new Error('Unclosed section "' + P[1] + '" at ' + S)
          } else
            "name" === k || "{" === k || "&" === k ? y = !0 : "=" === k && o(E)
        }
        if (P = d.pop())
          throw new Error('Unclosed section "' + P[1] + '" at ' + T.pos);
        return h(c(f))
      }

      function c(t) {
        for (var e, n, i = [], r = 0, o = t.length; r < o; ++r)
          (e = t[r]) && ("text" === e[0] && n && "text" === n[0] ? (n[1] += e[1],
            n[3] = e[3]) : (i.push(e),
            n = e));
        return i
      }

      function h(t) {
        for (var e, n = [], i = n, r = [], o = 0, s = t.length; o < s; ++o)
          switch ((e = t[o])[0]) {
            case "#":
            case "^":
              i.push(e),
                r.push(e),
                i = e[4] = [];
              break;
            case "/":
              r.pop()[5] = e[2],
                i = r.length > 0 ? r[r.length - 1][4] : n;
              break;
            default:
              i.push(e)
          }
        return n
      }

      function p(t) {
        this.string = t,
          this.tail = t,
          this.pos = 0
      }

      function d(t, e) {
        this.view = t,
          this.cache = {
            ".": this.view
          },
          this.parent = e
      }

      function f() {
        this.cache = {}
      }

      var g = Object.prototype.toString
        , m = Array.isArray || function (t) {
        return "[object Array]" === g.call(t)
      }
        , v = RegExp.prototype.test
        , y = /\S/
        , S = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      }
        , _ = /\s*/
        , b = /\s+/
        , I = /\s*=/
        , B = /\s*\}/
        , w = /#|\^|\/|>|\{|&|=|!/;
      p.prototype.eos = function () {
        return "" === this.tail
      }
        ,
        p.prototype.scan = function (t) {
          var e = this.tail.match(t);
          if (!e || 0 !== e.index)
            return "";
          var n = e[0];
          return this.tail = this.tail.substring(n.length),
            this.pos += n.length,
            n
        }
        ,
        p.prototype.scanUntil = function (t) {
          var e, n = this.tail.search(t);
          switch (n) {
            case -1:
              e = this.tail,
                this.tail = "";
              break;
            case 0:
              e = "";
              break;
            default:
              e = this.tail.substring(0, n),
                this.tail = this.tail.substring(n)
          }
          return this.pos += e.length,
            e
        }
        ,
        d.prototype.push = function (t) {
          return new d(t, this)
        }
        ,
        d.prototype.lookup = function (t) {
          var n, i = this.cache;
          if (i.hasOwnProperty(t))
            n = i[t];
          else {
            for (var s, a, u, l = this, c = !1; l;) {
              if (t.indexOf(".") > 0)
                for (s = l.view,
                       a = t.split("."),
                       u = 0; null != s && u < a.length;)
                  u === a.length - 1 && (c = r(s, a[u]) || o(s, a[u])),
                    s = s[a[u++]];
              else
                s = l.view[t],
                  c = r(l.view, t);
              if (c) {
                n = s;
                break
              }
              l = l.parent
            }
            i[t] = n
          }
          return e(n) && (n = n.call(this.view)),
            n
        }
        ,
        f.prototype.clearCache = function () {
          this.cache = {}
        }
        ,
        f.prototype.parse = function (e, n) {
          var i = this.cache
            , r = e + ":" + (n || t.tags).join(":")
            , o = i[r];
          return null == o && (o = i[r] = l(e, n)),
            o
        }
        ,
        f.prototype.render = function (t, e, n, i) {
          var r = this.parse(t, i)
            , o = e instanceof d ? e : new d(e);
          return this.renderTokens(r, o, n, t, i)
        }
        ,
        f.prototype.renderTokens = function (t, e, n, i, r) {
          for (var o, s, a, u = "", l = 0, c = t.length; l < c; ++l)
            a = undefined,
              "#" === (s = (o = t[l])[0]) ? a = this.renderSection(o, e, n, i) : "^" === s ? a = this.renderInverted(o, e, n, i) : ">" === s ? a = this.renderPartial(o, e, n, r) : "&" === s ? a = this.unescapedValue(o, e) : "name" === s ? a = this.escapedValue(o, e) : "text" === s && (a = this.rawValue(o)),
            a !== undefined && (u += a);
          return u
        }
        ,
        f.prototype.renderSection = function (t, n, i, r) {
          function o(t) {
            return s.render(t, n, i)
          }

          var s = this
            , a = ""
            , u = n.lookup(t[1]);
          if (u) {
            if (m(u))
              for (var l = 0, c = u.length; l < c; ++l)
                a += this.renderTokens(t[4], n.push(u[l]), i, r);
            else if ("object" == typeof u || "string" == typeof u || "number" == typeof u)
              a += this.renderTokens(t[4], n.push(u), i, r);
            else if (e(u)) {
              if ("string" != typeof r)
                throw new Error("Cannot use higher-order sections without the original template");
              null != (u = u.call(n.view, r.slice(t[3], t[5]), o)) && (a += u)
            } else
              a += this.renderTokens(t[4], n, i, r);
            return a
          }
        }
        ,
        f.prototype.renderInverted = function (t, e, n, i) {
          var r = e.lookup(t[1]);
          if (!r || m(r) && 0 === r.length)
            return this.renderTokens(t[4], e, n, i)
        }
        ,
        f.prototype.renderPartial = function (t, n, i, r) {
          if (i) {
            var o = e(i) ? i(t[1]) : i[t[1]];
            return null != o ? this.renderTokens(this.parse(o, r), n, i, o) : void 0
          }
        }
        ,
        f.prototype.unescapedValue = function (t, e) {
          var n = e.lookup(t[1]);
          if (null != n)
            return n
        }
        ,
        f.prototype.escapedValue = function (e, n) {
          var i = n.lookup(e[1]);
          if (null != i)
            return t.escape(i)
        }
        ,
        f.prototype.rawValue = function (t) {
          return t[1]
        }
        ,
        t.name = "mustache.js",
        t.version = "3.0.1",
        t.tags = ["{{", "}}"];
      var k = new f;
      return t.clearCache = function () {
        return k.clearCache()
      }
        ,
        t.parse = function (t, e) {
          return k.parse(t, e)
        }
        ,
        t.render = function (t, e, i, r) {
          if ("string" != typeof t)
            throw new TypeError('Invalid template! Template should be a "string" but "' + n(t) + '" was given as the first argument for mustache#render(template, view, partials)');
          return k.render(t, e, i, r)
        }
        ,
        t.to_html = function (n, i, r, o) {
          var s = t.render(n, i, r);
          if (!e(o))
            return s;
          o(s)
        }
        ,
        t.escape = u,
        t.Scanner = p,
        t.Context = d,
        t.Writer = f,
        t
    }),

      function () {
        var t = [].slice
          , e = {}.hasOwnProperty;
        this.PO = {
          PRODUCT_HANDLE_REGEX: /\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/,
          $: function (t, e) {
            var n;
            return null == e && (e = document),
              null == t.nodeType || 3 !== (n = t.nodeType) && 9 !== n ? e.querySelector ? e.querySelector(t) : "." === t[0] ? this.findElmByClassName(t.slice(1), e)[0] : "#" === t[0] ? e.getElementById(t.slice(1)) : e.getElementById(t) : t
          },
          findElmByClassName: function (t, e) {
            var n, i, r, o, s;
            for (s = [],
                   i = 0,
                   r = (o = e.getElementsByTagName("*")).length; i < r; i++)
              (n = o[i]).className.match(t) && s.push(n);
            return s
          },
          removeClassName: function (t, e) {
            return "classList" in t ? t.classList.remove(e) : t.className = t.className.replace(RegExp("\\b" + class_name + "\\b", "g"), "")
          },
          isVisible: function (t) {
            return null != t.offsetParent
          },
          extend: function () {
            var n, i, r, o, s, a, u;
            for (o = arguments[0],
                   n = 0,
                   r = (a = 2 <= arguments.length ? t.call(arguments, 1) : []).length; n < r; n++) {
              s = a[n];
              for (i in s)
                e.call(s, i) && ((u = s[i]) instanceof Array ? o[i] = u.slice(0) : null == o[i] || "[object Object]" !== Object.prototype.toString.call(u) ? o[i] = u : o[i] = this.extend(o[i], u))
            }
            return o
          },
          defer: function (t, e) {
            return setTimeout(e, t)
          },
          log: function (t) {
            return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("[Back in Stock] " + t) : void 0
          },
          windowSize: function () {
            return {
              width: window.innerWidth || document.documentElement.clientWidth,
              height: window.innerHeight || document.documentElement.clientHeight
            }
          },
          css: function (t, e) {
            var n, i;
            for (n in e)
              i = e[n],
                t.style[n] = i;
            return t
          },
          injectCSS: function (t) {
            var e;
            return e = document.createElement("style"),
              document.getElementsByTagName("head")[0].appendChild(e),
              e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
          },

          urlIsProductPage: function () {
            return null != decodeURIComponent(window.location.pathname).match(this.PRODUCT_HANDLE_REGEX)
          },
          toQueryString: function (t, e) {
            var n, i, r, o;
            i = [];
            for (n in t)
              o = t[n],
              e && (n = e + "[" + n + "]"),
                r = "object" == typeof o ? this.toQueryString(o, n) : n + "=" + encodeURIComponent(o),
                i.push(r);
            return i.join("&")
          },
          urlParamsToObject: function () {
            var t, e, n, i, r;
            for (r = {},
                   n = 0,
                   i = (e = location.search.substr(1).split("&")).length; n < i; n++)
              r[(t = e[n].split("="))[0]] = t[1];
            return r
          },
          urlParam: function (t) {
            return this.urlParamsToObject()[t] || null
          },
          request: function (t, e) {
            var n, i, r, o, s, a;
            if (null == e && (e = {}),
              o = PO.extend({
                method: "GET"
              }, e),
              a = new XMLHttpRequest,
              i = new PO.Promise,
              a.onreadystatechange = function () {
                if (4 === a.readyState)
                  return i.resolve(!(200 === a.status), a.responseText)
              }
              ,
              a.open(o.method, t, !0),
            null != e.headers) {
              r = e.headers;
              for (n in r)
                s = r[n],
                  a.setRequestHeader(n, s)
            }
            return a.send(o.data),
              i
          },
          submitNotificationData: function (url, data) {
            var xmlhttp = new XMLHttpRequest();
            var i = new PO.Promise;
            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState === 4) { //XMLHttpRequest.DONE
                if (xmlhttp.status === 200) {
                  return i.resolve(!(200 === xmlhttp.status), xmlhttp.responseText)
                }
              }
            };

            xmlhttp.open("GET", url + '?' + PO.toQueryString(data), true);
            xmlhttp.send();
            return i;
          },
          requestJSONP: function (t, e) {
            var n, i, r, o;
            o = document.createElement("script"),
              i = "JSONP" + (new Date).getTime(),
              r = new PO.Promise;
            for (n in e)
              e[n],
              n + "=" + e;
            return null == window._PO && (window._PO = {}),
              window._PO[i] = function (t) {
                return delete PO[i],
                  r.resolve(t)
              }
              ,
              o.src = t + "?callback=_PO." + i + "&" + PO.toQueryString(e),
              document.getElementsByTagName("head")[0].appendChild(o),
              r
          },
          parseJSON: function (t) {
            if ("string" == typeof t) {
              if (window.JSON && window.JSON.parse)
                return window.JSON.parse(t);
              if (t = t.replace(/^\s+|\s+$/g, ""),
                !/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                throw "Invalid JSON";
              return new Function("return " + t)()
            }
          },
          on: function (t, e, n) {
            return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
          },
          domReady: function () {
            var t;
            return null == this._domReadyPromise && (this._domReadyPromise = new PO.Promise,
              "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", (t = this,
                  function () {
                    return t._domReadyPromise.resolve(t)
                  }
              )) : this._domReadyPromise.resolve()),
              this._domReadyPromise
          },
          preventDefault: function (t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
              t
          },
          jsonFromParams: function (t) {
            var e, n, i, r, o;
            for (o = {},
                   n = 0,
                   r = (e = t.split("&")).length; n < r; n++)
              o[(i = e[n].split("="))[0]] = i[1];
            return JSON.stringify(o)
          },
          execute: function (t) {
            var e, n, i, r;
            try {
              return t()
            } catch (o) {
              return n = o,
                i = PO.Config.app_hostname || "back-in-stock.appikon.com",
                r = "https://" + i + "/events/api",
                e = {
                  event: {
                    message: n.message,
                    stack: n.stack
                  }
                },
                PO.request(r, {
                  method: "POST",
                  data: PO.toQueryString(e)
                })
            }
          },
          helpers: {
            smallProductImage: function () {
              return function (t, e) {
                var n;
                return e((n = t.split(".")).slice(0, n.length - 1).join(".") + "_small." + n.slice(-1))
              }
            }
          },
          createPopover: function (t) {
            var e;
            return null == t && (t = {}),
              e = PO.extend(PO.Config, "undefined" != typeof _POConfig && null !== _POConfig ? _POConfig : {}, t),
              new PO.Popover(e)
          },
          genericTriggerHandler: function (t) {
            var e, n, i, r, o, s;
            if (null != (o = ((t = t || window.event).target || t.srcElement).className) && "function" == typeof o.match ? o.match(/PO_trigger/) : void 0) {
              if (PO.preventDefault(t),
                this.popovers = this.popovers || {},
                r = t.target.getAttribute("data-product-data"),
                s = t.target.getAttribute("data-variant-id"),
                r)
                try {
                  i = JSON.parse(r)
                } catch (a) {
                  t = a,
                    PO.log("Could not parse product data: " + t.message)
                }
              return e = (null != i ? i.handle : void 0) || t.target.getAttribute("data-product-handle"),
                (n = this.popovers[e] || (this.popovers[e] = PO.createPopover({
                  productHandle: e,
                  product: i,
                  button: {
                    visible: !1
                  }
                }))).ready.then(function () {
                  return PO.defer(13, function () {
                    return n.form.show({
                      variantId: s
                    })
                  })
                })
            }
          },
          create: function (t, e, n, i) {
            return null == n && (n = ""),
            null == i && (i = {}),
            null == this._base && (this._base = new PO.Base,
                this._base.onError = function () {
                }
                ,
                this._base.onSuccess = function () {
                }
            ),
              this._base.create(t, e, n, i)
          },
          init: function () {
            var t;
            if (t = window._poq || [],
              window._poq = (new PO.CmdQueue).push.apply(this, t),
            !0 === PO.Config.generic_trigger_handler && PO.on(document, "click", PO.genericTriggerHandler),
              window.POMobiliaForm = PO.MobiliaForm,
              PO.urlIsProductPage())
              return PO.popup = PO.createPopover(),
                window.POPopover = PO.popup
          }
        }
      }
        .call(this),
      function () {
        var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)
              if (e in this && this[e] === t)
                return e;
            return -1
          }
        ;
        PO.Base = function () {
          function e(t) {
            null == t && (t = PO.Config),
              this.settings = PO.extend({
                position_left: !0,
                button_url: "//" + t.app_hostname + "/images/content/notify_btn.png"
              }, t),
              this._variantsByTitle = {},
              this._variantsById = {},
              this.productHandle = this.settings.productHandle,
              this.product = this.settings.product,
              this.ajaxOpts = {
                url: "https://" + t.app_hostname + "/prod"
              }
          }

          return e.prototype.preOrderEnabled = function (e) {
            return this.getSetting(e.id, "preOrderEnabled") || false;
          },
          e.prototype.getSetting = function(variantId, settingField) {
            var variantSetting = PO.Config.variantSettings[variantId] || {}
            var productSetting = PO.Config.productSettings[this.product.id] || {}
            return variantSetting[settingField] || productSetting[settingField] || POConfig.defaultSetting[settingField];
          },
          e.prototype.variantIsUnavailable = function (e) {
            var n;
            return this.variantSoldOut(e) && this.variantMeetsInventoryManagementPolicy(e) && this.variantMeetsPreorderPolicy(e) && (n = this.settings.hide_for_product_tag,
            t.call(this.product.tags, n) < 0) && this.showForCollections(this.product.collections)
          }
            ,
            e.prototype.variantSoldOut = function (t) {
              1 !== this.settings.instock_qty_level && !1 === this.settings.preorder_enabled && PO.log("Warning: Show for preorder is off: ignoring custom instock_qty_level setting.");
              if (null != t.inventory_quantity) {
                return t.inventory_quantity < this.settings.instock_qty_level
              } else {
                if (this.settings.preorder_enabled == true) {
                  return true;
                }
                //!0 === this.settings.preorder_enabled && PO.log("Warning: inventory_quantity not available but show for preorder is enabled.");
                !1 === this.settings.instock_qty_level && PO.log("Warning: instock_qty_level is set but inventory_quantity not available.");
                return !1 === t.available
              }
            }
            ,
            e.prototype.variantMeetsInventoryManagementPolicy = function (t) {
              return !this.settings.require_inventory_management || t.inventory_management && t.inventory_management.length > 0
            }
            ,
            e.prototype.variantMeetsPreorderPolicy = function (t) {
              return !!this.settings.preorder_enabled || !1 === t.available
            }
            ,
            e.prototype.showForCollections = function (t) {
              if(t && t.length && this.settings.hide_for_collections) {
                for (i=0; i < t.length ; i++) {
                  if(this.settings.hide_for_collections.indexOf(t[i].id) > -1) {
                    return false;
                  }
                }
              }
              return true;
            }
            ,
            e.prototype.filterDuplicateSKUs = function (t) {
              var e, n, i, r, o, s;
              for (r = {},
                     o = function (t) {
                       var e;
                       return !((null != (e = s.sku) ? e.length : void 0) > 0) || null == r[t] && ((r[t] = 1) && !0)
                     }
                     ,
                     i = [],
                     e = 0,
                     n = t.length; e < n; e++)
                o((s = t[e]).sku) && i.push(s);
              return i
            }
            ,
            e.prototype.getProducts = function () {
              var t, e, n, i;
              return this.ready = new PO.Promise,
                n = this,
                t = function () {
                  if (n.processProductVariants(n.product),
                  n.variants.length > 0)
                    return n.ready.resolve(n.variants)
                }
                ,
                this.product ? t() : (e = this._productDataURL()) && PO.request(e).then((i = this,
                    function (e, n) {
                      return e ? PO.log("PO.Base: error loading product data (" + n + ")") : (i.product = PO.parseJSON(n),
                        t())
                    }
                )),
                this.ready
            }
            ,
            e.prototype.processProductVariants = function (t) {
              var e, n, i, r, o;
              for (e = 0,
                     n = (i = t.variants).length; e < n; e++)
                r = i[e],
                  this._variantsByTitle[r.title] = PO.extend({}, r),
                  this._variantsById[r.id] = PO.extend({}, r);
              if (this.variants = function () {
                var t, e, n, i;
                for (i = [],
                       t = 0,
                       e = (n = this.product.variants).length; t < e; t++)
                  o = n[t],
                  this.variantIsUnavailable(o) && i.push(o);
                return i
              }
                .call(this),
              !0 === this.settings.ignore_duplicate_skus)
                return this.variants = this.filterDuplicateSKUs(this.variants)
            }
            ,
            e.prototype.create = function (email, e, productId, stockNotificationRequestDetails) {
              var finalRequestObj, s;
              var mainThis = this;

              null == productId && (productId = this.product.id);
              null == stockNotificationRequestDetails && (stockNotificationRequestDetails = {});

              PO.extend(this.ajaxOpts, {
                key: "callback"
              });

              var requestObj = {
                product_no: productId,
                quantity_required: stockNotificationRequestDetails.quantity_required || 1,
                accepts_marketing: stockNotificationRequestDetails.accepts_marketing || !1,
                customer_utc_offset: 60 * (new Date).getTimezoneOffset()
              };

              var variant_title = undefined;
              var variant_sku = undefined;
              if (this.product !== undefined) {
                requestObj['product_title'] = this.product.title;
                requestObj['product_vendor'] = this.product.vendor;
                requestObj['product_handle'] = this.product.handle;

                var variant = this.product.variants.find(variant => {
                    return variant.id == parseInt(e)
                });
                variant_title = variant.title;
                variant_sku = variant.sku;
              }

              null != email && (requestObj.email = email);

              if(stockNotificationRequestDetails.pushSubscriptionToken) {
                requestObj.pushSubscriptionToken = stockNotificationRequestDetails.pushSubscriptionToken;
              }

              null != stockNotificationRequestDetails.phone_number && (requestObj.phone_number = stockNotificationRequestDetails.phone_number);
              finalRequestObj = {
                shop: this.settings.shop,
                notification: requestObj,
                variant: {
                  variant_no: e
                }
              };

              if (variant_title !== undefined) {
                finalRequestObj.variant['variant_title'] = variant_title
              }
              if (variant_sku !== undefined) {
                finalRequestObj.variant['sku'] = variant_sku
              }

              null != stockNotificationRequestDetails.recaptcha_response && (finalRequestObj.recaptcha_response = stockNotificationRequestDetails.recaptcha_response);

              return PO.submitNotificationData(this.ajaxOpts.url, finalRequestObj).then((
                  function (st, resp) {
                    resp = PO.parseJSON(resp);
                    return "OK" === resp.status ? mainThis.onSuccess(resp) : mainThis.onError(resp)
                  }
              ))
            }
            ,
            e.prototype._productDataURL = function () {
              var t;
              if (t = this.productHandle || this._parseProductHandleFromURL())
                return "//" + window.location.hostname + "/products/" + t + ".js"
            }
            ,
            e.prototype._parseProductHandleFromURL = function () {
              var t;
              return (t = decodeURIComponent(window.location.pathname).match(PO.PRODUCT_HANDLE_REGEX)) && t[1]
            }
            ,
            e
        }()
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        };
        PO.CmdQueue = function () {
          function e() {
            this.push = t(this.push, this)
          }

          return e.prototype.push = function () {
            var t, e, n;
            for (t = 0,
                   n = arguments.length; t < n; t++)
              "function" == typeof (e = arguments[t]) && e();
            return this
          }
            ,
            e
        }()
      }
        .call(this),
      function () {
        PO.detectVariant = function (popup) {
          var e, n, i, r;
          i = PO.urlParam("variant");
          if (i) {
            return popup._variantsById[i]
          } else {

            r = function () {
              var t, n, i, r, s;
              i = document.querySelectorAll("select.single-option-selector");
              s = [];

              var singleOptionSelector = PO.$("select.single-option-selector");
              if (singleOptionSelector != null && singleOptionSelector.selectedIndex != null && singleOptionSelector.selectedIndex !== -1) {
                s.push(singleOptionSelector[singleOptionSelector.selectedIndex].value)
              } else {
                s.push(void 0);
              }

              return s
            }();
            n = popup._variantsByTitle[r.join(" / ")]
            if (n) {
              return n;
            } else {
              var variant = popup.product.variants[0];
              if (false === popup.product.available) {
                return variant;
              } else {
                if(PO.Config.product.selected_or_first_available_variant){
                  variant = PO.Config.product.selected_or_first_available_variant;
                }
                
                if (variant.inventory_quantity != null) {
                  if (variant.inventory_quantity < popup.settings.instock_qty_level && popup.settings.preorder_enabled) {
                    return variant;
                  } else {
                    return void 0;
                  }
                } else {
                  return void 0;
                }
              }
            }
          }
        }
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        };
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        }
          , e = {}.hasOwnProperty;
        PO.Form = function () {
          function n(e, n) {
            var i, r, o, s, a, u, l;
            this.popover = e,
              this.submitButton = t(this.submitButton, this),
              this.showMessage = t(this.showMessage, this),
              this.reset = t(this.reset, this),
              this.toggleComplete = t(this.toggleComplete, this),
              this.submit = t(this.submit, this),
              this.hide = t(this.hide, this),
              this.show = t(this.show, this),
              this.blurEmailField = t(this.blurEmailField, this),
              this.focusEmailField = t(this.focusEmailField, this),
              this.injectCSS = t(this.injectCSS, this),
              this.isOpen = !1,
              this.pushSubscriptionToken = null,
              i = {
                id: "PO_frame",
                frameBorder: 0,
                src: "about:blank",
                allowTransparency: !0
              },
              r = {
                background: "none",
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                border: "0",
                overflow: "hidden",
                display: "none"
              },
              s = 999999,
              a = PO.extend({}, r, {
                left: 0,
                width: "100%",
                "z-index": s + 1
              }),
              a = PO.extend({}, a, this.popover.settings.iframe_css),
              this.injectCSS(this.renderCSS(i.id, a) + n),
              this.frame = document.createElement("iframe");
            for (o in i)
              u = i[o],
                this.frame.setAttribute(o, u);
            PO.defer(50, (l = this,
                function () {
                  var t;
                  return t = PO.extend({
                    quantity_field_enabled: l.popover.settings.quantity_field_enabled
                  }, l.popover.settings.labels),
                    l.render(l.popover.product, t)
                }
            )),
              (this.popover.settings.root || document.getElementsByTagName("body")[0]).appendChild(this.frame)
          }

                    var i, r, o;
                    n.prototype.renderFinally = function (iframeElem, templateVars, partials) {
                        var mainThis = this;
                        iframeElem.open();
                        iframeElem.write(Mustache.render(popupFormTemplate, templateVars, partials));
                        iframeElem.close();

                        PO.on(iframeElem.getElementsByTagName("form")[0], "submit", this.submit);

                        iframeElem.getElementById("enable_push_notification") && PO.on(iframeElem.getElementById("enable_push_notification"), "change", function () {
                            if (this.checked) {
                                PO.log('checked');
                                this.checked = false;
                                var localThis = this;
                                if (window.pushowl) {
                                    var registerForEvent = pushowl.registerForEvent('back_in_stock', true);
                                    registerForEvent.then(function (fulfilled) {
                                        PO.log('fullfilled');
                                        localThis.checked = true;
                                        mainThis.pushSubscriptionToken = fulfilled.pushowl_subscriber_token;
                                        PO.log(mainThis.pushSubscriptionToken);
                                    }).catch(function (error) {
                                        PO.log('failed');
                                        localThis.checked = false;
                                        mainThis.pushSubscriptionToken = null;
                                        PO.log(mainThis.pushSubscriptionToken);
                                    });
                                }
                            } else {
                                PO.log('unchecked');
                                mainThis.pushSubscriptionToken = null;
                            }
                        });

            this.backdrop = PO.$("body", iframeElem);

            var onClose = function (t) {
              if ((t.target || t.srcElement).className.indexOf("action-close") > -1) {
                PO.preventDefault(t);
                return mainThis.hide()
              }
            };
            PO.on(iframeElem, "click", onClose);
            PO.on(iframeElem, "touchend", onClose);

            if (this.popover.settings.show_phone_number_field) {
              var smsSupportDetails = {
                preferredCountries: this.popover.settings.preferredCountries,
                utilsScript: o
              };
              return loadScript(r, this.frameDoc(), (function () {
                  return mainThis.intlTelInput = mainThis.frame.contentWindow.intlTelInput(mainThis.frameDoc().querySelector("#phone-number input"), smsSupportDetails)
                }
              ))
            }
          };
          return n.prototype.ACTIVE_CLASS_NAME = "si-popover-active",
            r = (i = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input") + "/17.0.5/js/intlTelInput.min.js",
            o = i + "/16.0.2/js/utils.js",
            n.prototype.frameDoc = function () {
              return this.frame.contentDocument || this.frame.contentWindow.document
            }
            ,
            n.prototype.emailField = function () {
              return this.frameDoc().querySelector("#email-address input")
            }
            ,
            n.prototype.mobileDevice = function () {
              return "absolute" === ("function" == typeof window.getComputedStyle ? window.getComputedStyle(this.frame).getPropertyValue("position") : void 0)
            }
            ,
            n.prototype.renderCSS = function (t, n) {
              var i, r;
              return "#" + t + " { " + function () {
                var t;
                t = [];
                for (i in n)
                  e.call(n, i) && (r = n[i],
                    t.push(i + ": " + r + ";"));
                return t
              }().join("\n") + " }\n"
            }
            ,
            n.prototype.injectCSS = function (t) {
              return this.styleElm = document.createElement("style"),
                document.getElementsByTagName("head")[0].appendChild(this.styleElm),
                this.styleElm.styleSheet ? this.styleElm.styleSheet.cssText = t : this.styleElm.appendChild(document.createTextNode(t)),
                this.styleElm
            }
            ,
            n.prototype.selectVariant = function (t) {
              var e, n, i, r, o, s;
              if (null != t)
                for (t = parseInt(t, 10),
                       e = n = 0,
                       i = (o = (s = PO.$("#variants", this.frameDoc())).options).length; n < i; e = ++n)
                  if (r = o[e],
                  parseInt(r.value, 10) === t)
                    return s.selectedIndex = e
            }
            ,
            n.prototype.focusEmailField = function () {
              var t, e;
              try {
                if ((e = this.emailField()) && "focus" in e)
                  return e.focus()
              } catch (n) {
                return t = n,
                  PO.log(null != t ? t.message : void 0)
              }
            }
            ,
            n.prototype.blurEmailField = function () {
              var t, e;
              try {
                if ((e = this.emailField()) && "blur" in e)
                  return e.blur()
              } catch (n) {
                return t = n,
                  PO.log(null != t ? t.message : void 0)
              }
            }
            ,
            n.prototype.show = function (t) {
              var e;
              return null == t && (t = {}),
              "variantId" in t && this.selectVariant(t.variantId),
                this.frame.style.display = "block",
                PO.defer(13, (e = this,
                    function () {
                      return e.backdrop.className += " fadein",
                        PO.defer(100, e.focusEmailField)
                    }
                )),
                PO.$("body").className += " " + this.ACTIVE_CLASS_NAME,
              !0 === this.mobileDevice() && (this.frame.style.height = this.frame.parentElement.scrollHeight + "px"),
                this.isOpen = !0,
                this
            }
            ,
            n.prototype.hide = function () {
              return this.isOpen = !1,
                this.backdrop.className = this.backdrop.className.replace(/fadein/, ""),
                document.getElementsByTagName("body")[0].style.overflow = "",
                this.blurEmailField(),
                PO.removeClassName(PO.$("body"), this.ACTIVE_CLASS_NAME),
                this.frame.style.display = "none",
                this.reset(),
                this.frame
            }
            ,
            n.prototype.render = function (t, e) {
              var onClose, iframeElem, smsSupportDetails, a, partials, l, templateVars;
              var mainThis = this;

              templateVars = PO.extend({}, e, PO.helpers, {
                product: PO.extend(t, {
                  variants: this.popover.variants
                }),
                unavailableVariants: this.popover.variants,
                styles: this.popover.settings.styles,
                single_variant_product: 1 === function () {
                  var variantArray;
                  variantArray = [];
                  for (a in this.popover._variantsById) {
                    variantArray.push(a);
                  }
                  return variantArray
                }
                  .call(this).length,
                popup_theme: this.popover.settings.popup_theme,
                popup_js: this.popover.settings.popup_js,
                is_default_variant: 1 === this.popover.variants.length && ("Default" === (l = this.popover.variants[0].title) || "Default Title" === l || "DEFAULT TITLE" === l),
                madeby_link_visible: this.popover.settings.madeby_link_visible,
                customer: this.popover.settings.customer,
                content_for_body: this.popover.settings.content_for_body,
                shop_myshopify_domain: this.popover.settings.shop,
                show_phone_number_field: this.popover.settings.show_phone_number_field,
                only_sms_enabled: this.popover.settings.only_sms_enabled,
                show_sms_first: this.popover.settings.show_sms_first,
                show_fb: this.popover.settings.show_fb,
                newsletter_permission_enabled: this.popover.settings.newsletter_permission_enabled,
                newsletter_permission_default_checked: this.popover.settings.newsletter_permission_default_checked,
                newsletter_permission_text: this.popover.settings.newsletter_permission_text,
                push_owl_enabled: false,
                fb_page_id: this.popover.settings.fb_page_id
              });
              partials = PO.Config.partials;
              iframeElem = this.frameDoc();

              if (this.popover.settings.push_owl_enabled && window.pushowl) {
                window.pushowl.isEnabled().then(function (res) {
                  PO.log(JSON.stringify(res));
                  templateVars.push_owl_enabled = true;
                  return mainThis.renderFinally(iframeElem, templateVars, partials);
                }).catch(function (error) {
                  templateVars.push_owl_enabled = false;
                  return mainThis.renderFinally(iframeElem, templateVars, partials);
                })
              } else {
                return this.renderFinally(iframeElem, templateVars, partials);
              }
            }
            ,
            n.prototype.renderDone = function () {
              return this.toggleComplete(),
                PO.defer(1e4, (t = this,
                    function () {
                      return t.hide
                    }
                ));
              var t
            }
            ,
            n.prototype.submit = function (t) {
              var e, stockNotificationRequestDetails, emailFinal, r, o, s, a, email;


              PO.preventDefault(t);
              this.reset();
              this.submitButton().setAttribute("disabled", "disabled");
              var options = PO.$("#variants", this.frameDoc()).getElementsByTagName("option");
              var productInfo = function () {
                var validOptions = [];
                var optionsLength = options.length;
                for (var t = 0; t < optionsLength; t++) {
                  r = options[t];
                  r.selected && validOptions.push(r);
                }
                return validOptions
              }()[0];
              s = PO.$("#quantity_required", this.frameDoc());
              e = PO.$("#customer_accepts_marketing", this.frameDoc());
              a = PO.$("#g-recaptcha-response", this.frameDoc());


              if (!this.popover.settings.recaptcha_enabled || (null != a ? a.value : void 0)) {
                stockNotificationRequestDetails = {
                  quantity_required: (null != s ? s.value : void 0) || 1,
                  accepts_marketing: !0 === (null != e ? e.checked : void 0),
                  recaptcha_response: null != a ? a.value : void 0,
                  pushSubscriptionToken: this.pushSubscriptionToken
                };

                email = this.emailField();
                emailFinal = (null != email ? email.value : void 0) || null;

                if (this.popover.settings.show_phone_number_field) {
                  o = PO.$("#phone-number", this.frameDoc());
                  if (PO.isVisible(o)) {
                    stockNotificationRequestDetails.phone_number = this.intlTelInput.getNumber();
                    emailFinal = null;
                  }
                }

                //if (!emailFinal && !stockNotificationRequestDetails.phone_number) {
                  //this.showMessage("Please provide email or phone number.");
                  //return;
                //} else {
                  return this.popover.create(emailFinal, productInfo.value, null, stockNotificationRequestDetails);
                //}
              }

              this.showMessage("Please solve the CAPTCHA to proceed.")
            }
            ,
            n.prototype.toggleComplete = function (t) {
              var e;
              return null == t && (t = !0),
                e = PO.$("#container", this.frameDoc()),
                this.submitButton().removeAttribute("disabled"),
                t ? e.className += " complete" : e.className = e.className.replace(/complete/g, ""),
                this
            }
            ,
            n.prototype.reset = function () {
              return this.showMessage(""),
                this.toggleComplete(!1)
            }
            ,
            n.prototype.showMessage = function (t, e) {
              var n;
              return null == e && (e = "#message_holder"),
                n = PO.$(e, this.frameDoc()),
                this.submitButton().removeAttribute("disabled"),
                t && t.length > 0 ? n.innerHTML = Mustache.render('<p class="alert alert-danger">{{message}}</p>', {
                  message: t
                }) : n.innerHTML = ""
            }
            ,
            n.prototype.submitButton = function () {
              return this._submitButton || (this._submitButton = PO.$("[type=submit]", this.frameDoc()))
            }
            ,
            n
        }()
      }
        .call(this),
      function () {
        var t = function (t, n) {
          function i() {
            this.constructor = t
          }

          for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
          return i.prototype = n.prototype,
            t.prototype = new i,
            t.__super__ = n.prototype,
            t
        }
          , e = {}.hasOwnProperty;
        PO.MobiliaForm = function (e) {
          function n(t, e) {
            var i;
            this.formEl = t,
            null == e && (e = PO.Config),
              n.__super__.constructor.call(this, e),
              this.productId = this.formEl.parentNode.getAttribute("id").split("-").slice(-1)[0],
              i = {
                accepts_marketing: null != this.acceptsMarketingState() ? this.acceptsMarketingState() : null,
                quantity_required: null != this.quantity_required() ? this.quantity_required() : null
              },
              this.create(this.email(), this.variant(), this.productId, i)
          }

          return t(n, e),
            n.prototype.email = function () {
              return $(this.formEl).find('[name="contact[email]"]').val()
            }
            ,
            n.prototype.acceptsMarketingState = function () {
              var t;
              if ((t = $(this.formEl).find('[name="customer_accepts_marketing"]')).is(":checked"))
                return t.val()
            }
            ,
            n.prototype.quantity_required = function () {
              var t;
              if (null != (t = $(this.formEl).find('[name="qty_required"]'))[0])
                return t.val()
            }
            ,
            n.prototype.variant = function () {
              var t;
              return null != (t = $(this.formEl).closest(".product-" + this.productId).find("[name=id]"))[0] ? t.val() : (t = $("#product-form-" + this.productId + " [name=id], #product-form-" + this.productId + " input[name=id], #product-select-" + this.productId).eq(0).val()) || $(this.formEl).data("first-variant")
            }
            ,
            n.prototype.onError = function (t) {
              var e, n;
              return n = function () {
                var n;
                n = [];
                for (e in t.errors)
                  n.push(t.errors[e].join());
                return n
              }(),
                this.render(t.status.toLowerCase(), n.join(" "))
            }
            ,
            n.prototype.onSuccess = function (t) {
              return this.render(t.status.toLowerCase(), t.message)
            }
            ,
            n.prototype.render = function (t, e) {
              return null == t && (t = ""),
              null == e && (e = ""),
                $(this.formEl).find(".PO_response").html($("<span>", {
                  "class": t,
                  html: e
                }))
            }
            ,
            n
        }(PO.Base)
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        }
          , e = function (t, e) {
          function i() {
            this.constructor = t
          }

          for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
          return i.prototype = e.prototype,
            t.prototype = new i,
            t.__super__ = e.prototype,
            t
        }
          , n = {}.hasOwnProperty;
        PO.Popover = function (n) {
          function i(e) {
            var n, r, o, s;
            null == e && (e = PO.Config),
              this.toggle = t(this.toggle, this),
              this.createUI = t(this.createUI, this),
              this.triggerHandler = t(this.triggerHandler, this),
              this.variantChanged = t(this.variantChanged, this),
              n = {
                trigger: "PO_trigger"
              },
              this.settings = PO.extend(n, e),
              i.__super__.constructor.call(this, this.settings),
            this.settings.trigger && PO.on(document, "click", this.triggerHandler),
              this.getProducts().then((s = this,
                  function () {
                    return s.createUI()
                  }
              )),
            null != this.settings.multivariantDropdownContainer && !0 === (null != (o = this.settings.button) ? o.visible : void 0) && (r = PO.$(this.settings.multivariantDropdownContainer)) && PO.on(r, "change", this.variantChanged)
          }

          return e(i, n),
            i.prototype.create = function (t, e, n, r) {
              return null == n && (n = this.product.id),
              null == r && (r = {}),
              this.settings.reCAPTCHAEnabled && this.form.frame.contentWindow.grecaptcha.reset(),
                i.__super__.create.apply(this, arguments)
            }
            ,
            i.prototype.variantChanged = function () {
              var t, e, n, i;
              if (e = PO.$("[name=id]", PO.$(this.settings.multivariantDropdownContainer)),
                t = null,
              null != (t = (i = PO.detectVariant(this)) ? i.id : e ? "SELECT" === e.nodeName && e.selectedIndex >= 0 ? e.children[e.selectedIndex].value : e.value : null != (n = this.product.variants[0]) ? n.id : void 0))
                return this.toggleForVariant(t)
            }
            ,
            i.prototype.triggerHandler = function (t) {
              var e, n;
              for (e = t.target || t.srcElement,
                     n = []; e;) {
                if (null != e.getAttribute && (e.getAttribute("id") === this.settings.trigger || e.getAttribute("className") === this.settings.trigger)) {
                  PO.preventDefault(t),
                    this.form.selectVariant(e.getAttribute("data-variant-id")),
                    this.toggle();
                  break
                }
                n.push(e = e.parentNode)
              }
              return n
            }
            ,
            i.prototype.createUI = function () {

            }
            ,
            i.prototype.toggle = function (t) {
              return null == t && (t = this.form.isOpen),
                t ? this.hide() : this.show(),
                this
            }
            ,
            i.prototype.hide = function () {
              return this.form.hide()
            }
            ,
            i.prototype.show = function (t) {
              return this.form.show(t)
            }
            ,
            i.prototype.alert = function (t) {
              return console && console.log && console.log("PO.Popover.alert() is deprecated."),
                alert(t)
            }
            ,
            i.prototype.onError = function (t) {
              var e, n, i;
              if (n = function () {
                var n, r;
                n = t.errors,
                  r = [];
                for (e in n)
                  i = n[e],
                    r.push(i);
                return r
              }(),
              null != this.form)
                return this.form.showMessage(POConfig.labels.empty_email_phone_validation_message)
            }
            ,
            i.prototype.onSuccess = function () {
              if (null != this.form)
                return this.form.renderDone()
            }
            ,
            i.prototype.toggleForVariant = function (t) {
              var e;
              if (null != (e = this._variantsById[t] || this._variantsByTitle[t]) && null != this.button)
                return this.button.elm.setAttribute("data-variant-id", e.id),
                  this.button.toggle(this.variantIsUnavailable(e))
            }
            ,
            i
        }(PO.Base)
      }
        .call(this),
      function () {
        var t = [].slice;
        PO.Promise = function () {
          function e() {
            this.resolved = !1,
              this.callbacks = [],
              this.data = null
          }

          return e.prototype.then = function (t) {
            return this.callbacks.push(t),
              this.resolved ? this.execute() : this
          }
            ,
            e.prototype.resolve = function () {
              var e;
              return e = 1 <= arguments.length ? t.call(arguments, 0) : [],
                this.data = e,
                this.resolved = !0,
                this.execute()
            }
            ,
            e.prototype.execute = function () {
              for (var t; t = this.callbacks.shift();)
                t.apply(t, this.data);
              return this
            }
            ,
            e
        }()
      }
        .call(this),
      function () {
        PO.Analytics = function () {
          function t() {
            this.key = "po_id",
              this.endpoint = "//" + PO.Config.app_hostname + "/prod/conversions"
          }

          t.prototype.init = function () {
            this.identify();
            if (window.location.pathname.match(/\/checkouts/)) {
              PO.log('bis checkout check.');
              return this.trackCheckout();
            }
          };

          t.prototype.createCookie = function (t, e, n) {
            var i, r;
            return n ? ((i = new Date).setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
              r = "; expires=" + i.toGMTString()) : r = "",
              document.cookie = encodeURIComponent(t) + "=" + e + r + "; path=/;"
          };

          t.prototype.getCookie = function (t) {
            var e, n;
            return 0 === document.cookie.length ? null : -1 === (n = document.cookie.indexOf(t + "=")) ? null : (n = n + t.length + 1,
            -1 === (e = document.cookie.indexOf(";", n)) && (e = document.cookie.length),
              unescape(document.cookie.substring(n, e)))
          };

                    t.prototype.deleteCookie = function (t) {
                        return this.createCookie(t, "", -1)
                    };

          t.prototype.identify = function () {
            if (null !== window.location.search.match(this.key)) {
              PO.log('bis cookie read successfully.');
              return this.createCookie(this.key, PO.urlParam(this.key), 30);
            }
          };

          t.prototype.trackCheckout = function () {
            var t, e, n, i, r, o, s, a;
            if (null != (t = this.getCookie(this.key))) {
              PO.log('bis cookie about to be used for checkout.');
              return this.track("checkout", {
                checkout_token: "undefined" != typeof Shopify && null !== Shopify && null != (e = Shopify.checkout) ? e.token : void 0,
                po_id: t,
                order_id: "undefined" != typeof Shopify && null !== Shopify && null != (n = Shopify.checkout) ? n.order_id : void 0,
                subtotal_price: "undefined" != typeof Shopify && null !== Shopify && null != (i = Shopify.checkout) ? i.subtotal_price : void 0,
                total_price: "undefined" != typeof Shopify && null !== Shopify && null != (r = Shopify.checkout) ? r.total_price : void 0,
                checkout_step: "undefined" != typeof Shopify && null !== Shopify && null != (o = Shopify.Checkout) ? o.step : void 0,
                order_created_at: "undefined" != typeof Shopify && null !== Shopify && null != (s = Shopify.checkout) ? s.created_at : void 0,
                location: window.location.toString()
              }).then((a = this,
                  function () {
                    //return a.deleteCookie(a.key)
                  }
              ));
            } else {
              PO.log('bis cookie was null.');
            }
          };

          t.prototype.track = function (t, e) {
            var n, i, r;
            e = PO.extend({
              name: t,
              shop_name: PO.Config.shop
            }, e);

            i = function () {
              var t;
              t = [];
              for (n in e)
                r = e[n],
                  t.push(n + "=" + r);
              return t
            }().join("&");

            return PO.request(this.endpoint, {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              data: JSON.stringify(e)
            })
          };
          return t;
        }()
      }
        .call(this);

    PO.Config = {
      "app_hostname": "oasl8if153.execute-api.us-west-1.amazonaws.com",
      "instock_qty_level": 1,
      "preorder_enabled": true,
      "require_inventory_management": true,
      "ignore_duplicate_skus": false,
      "generic_trigger_handler": true,
      "quantity_field_enabled": false,
      "button": {
                "caption": "Pre Order",
                "visible": true,
                "widget_button_enabled": true,
                 "buttonBackgroundColor": "",
                "buttonBorderColor": "",
                "buttonBorderRadius": "",
                "buttonBorderWidth": "",
                "buttonColor": "",
                "buttonPaddingLeft": "",
                "buttonPaddingTop": "",
                "buttonFontSize": "",
                "buttonFontFamily": "",
                "buttonFontWeight": "",
                "buttonTextDecoration": "",
                "buttonMarginTop": "",
                "buttonMarginBottom": ""
      },
      "selectors": {
        "payment_button_selectors" : "form[action$='/cart/add'] .shopify-payment-button",
        "atcButtonSelector": "",
        "cartLabelSelector": ""
      },
      "partials": {},
      "shop": "langerchen.myshopify.com",
      "defaultSetting": {"quantityLimit":0,"overallQuantityLimit":0,"totalQuantityOrdered":0,"buttonText":"Pre Order","buttonMessage":"We will fulfill the order as soon as this item becomes available","buttonMessageVisibility":"ALWAYS","cartCheckoutLabel":"Pre-ordered items","preOrderTimeEnable":false,"dateStart":"-1","dateStop":"-1","discountValue":0.0,"discountType":"PERCENTAGE","orderTag":"appikon-pre-order","comingSoonEnable":false,"comingSoonHeader":"Coming Soon","comingSoonMessage":"Dropping on","comingSoonAvailableFrom":"-1","showPreOrderLabelOnCollectionPage":false,"collectionPagePreOrderLabelText":"","collectionPagePreOrderLabelClass":"","collectionPagePreOrderLabelCSS":"","preOrderClosedMessage":"Sold Out"}
    };

    PO.Config.shop = 'langerchen.myshopify.com';

    PO.Config = PO.extend(PO.Config, "undefined" != typeof _POConfig && null !== _POConfig ? _POConfig : {})

    window.POConfig = PO.Config;

    PO.domReady().then(PO.init);

    (new PO.Analytics()).init();

    var poProductPageFunction = function () {

        if(window.location.href.includes("cart")){

        jQuery.getJSON('/cart.js', function (data) {
              var cartItems = data.items;
              var variants = PO.Config.variantSettings;
              var variantsKeys = []

              for (var poVariants in variants){
                  if(variants[poVariants].preOrderEnabled == true){
                    variantsKeys.push(poVariants)

                    }
                }

              var appikonfinalArray = []
              var poVariantIds = []
              cartItems.map((item,index)=>{
                if(variantsKeys.includes(item.id.toString()) && ( item.properties == null || !Object.keys(item.properties).includes("item") )){
                   //console.log(!Object.keys(item.properties).includes("item"))
                   appikonfinalArray.push(index+1)
                   poVariantIds.push(item.id)
                }
              })
              var appikonPO = document.querySelectorAll(PO.Config.selectors.cartLabelSelector)
              var POArrIndex = 1;
              var poVariantIdsArrIndex = 0;
                for (var lineElement of appikonPO ){
                  if(appikonfinalArray.includes(POArrIndex)){
                  var cartLineLabel = PO.Config.variantSettings[poVariantIds[poVariantIdsArrIndex]].cartCheckoutLabel.length <= 1 ? PO.Config.defaultSetting.cartCheckoutLabel : PO.Config.variantSettings[poVariantIds[poVariantIdsArrIndex]].cartCheckoutLabel ;
                  let formData = {
                  line : POArrIndex,
                  properties: { 'item': cartLineLabel   }
                };

                fetch('/cart/change.js', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                .then(response => {
                console.log("Cart Properties")
                })
                .catch((error) => {
                 console.error('Error:', error);
                });
                var appikonCartPreOrderLabel = document.createElement("span");
                appikonCartPreOrderLabel.innerHTML=  PO.Config.variantSettings[poVariantIds[poVariantIdsArrIndex]].cartCheckoutLabel.length <= 1 ? PO.Config.defaultSetting.cartCheckoutLabel : PO.Config.variantSettings[poVariantIds[poVariantIdsArrIndex]].cartCheckoutLabel
                lineElement.append(appikonCartPreOrderLabel)
               poVariantIdsArrIndex += 1;
                }
                 POArrIndex +=1;
                }
              })

            var timer;
            timer = setInterval(function() {
              jQuery.getJSON('/cart.js', function (data) {
              var cartFetchedItems = data.items;
              var variantsToCheck = PO.Config.variantSettings;
              var POEnabledVariants = []
              for (var poVariants in variantsToCheck){
                if(variantsToCheck[poVariants].preOrderEnabled == true){
                  POEnabledVariants.push(poVariants)
                  }
              }
              //Running the loop based on cart items
              cartFetchedItems.map((item,index)=>{             
              if(POEnabledVariants.includes(item.id.toString())){
                var variantSetting = variantsToCheck[item.id];
                var overallAvailable = variantSetting.overallQuantityLimit - variantSetting.totalQuantityOrdered;  
                var fixedQuant = variantSetting.quantityLimit;
                if(variantSetting.overallQuantityLimit == 0 && variantSetting.quantityLimit == 0 ){
                  return;
                }
                if(overallAvailable > 0 && variantSetting.quantityLimit > 0  ){
                    fixedQuant = Math.min(overallAvailable,variantSetting.quantityLimit);
                    if(item.quantity > variantSetting.quantityLimit || item.quantity > overallAvailable ){
                       jQuery.post('/cart/change.js', {
                        id: item.id,
                        quantity: fixedQuant,
                    });
                    setReload();
                  }
                }
                if(item.quantity > variantSetting.quantityLimit && variantSetting.quantityLimit != 0 && variantSetting.overallQuantityLimit == 0){
                    jQuery.post('/cart/change.js', {
                     id: item.id,
                    quantity: variantSetting.quantityLimit,
                });
                   setReload();
                }
                if(item.quantity > overallAvailable && variantSetting.quantityLimit == 0 && overallAvailable > 0){
                    jQuery.post('/cart/change.js', {
                     id: item.id,
                     quantity: overallAvailable,
                 });
                 setReload();
                }
                
                function setReload(){
                   setTimeout(()=>{
                     window.location.reload();
                   },500)
                }
                
                   
                }
              })
              })
            }, 3000);
      }

      var appikonPOLabelSettings = PO.Config.defaultSetting ;
      
      if(appikonPOLabelSettings.showPreOrderLabelOnCollectionPage=== true){
        jQuery(".PO_trigger").each(function(){
         var snippetData = $(this).attr('appikon-po-settings')
         if(snippetData && snippetData !== "null") {
          var appikonPoParsedData = JSON.parse(snippetData);
          var productLabelSettings = JSON.parse(appikonPoParsedData.productSettings);
          var variantLabelSettings = JSON.parse(appikonPoParsedData.variantSettings);
         
          if(productLabelSettings.preOrderEnabled === true){
              $(this).html(`<span class="appikon-pre-order-label-collection-page"></span>`);
               jQuery('.appikon-pre-order-label-collection-page').html(appikonPOLabelSettings.collectionPagePreOrderLabelText)
          }else{
            var poShowCount = 0;
            var cVariant;
            for(cVariant in variantLabelSettings){
              var poSettingPojo = variantLabelSettings[cVariant];
              if(poSettingPojo.preOrderEnabled === true){
                 poShowCount +=1;
              }
            }
            if(poShowCount > 0){
               $(this).html(`<span class="appikon-pre-order-label-collection-page"></span>`);
               jQuery('.appikon-pre-order-label-collection-page').html(appikonPOLabelSettings.collectionPagePreOrderLabelText)
            }  
          }
         }
        });

      }

    var AppikonCustomAndPOLabelstyle = document.createElement('style');
    AppikonCustomAndPOLabelstyle.id = "AppikonCustomAndPOLabelStyle";
    AppikonCustomAndPOLabelstyle.innerHTML = PO.Config.defaultSetting.collectionPagePreOrderLabelCSS;
    document.head.appendChild(AppikonCustomAndPOLabelstyle);

    if (PO.urlIsProductPage() === true) {
      localStorage.removeItem("appikonPOFirstLoaded");
      PO.popup.ready.then(function() {
        if (PO.popup.variants.length < 1 || !PO.Config.button.widget_button_enabled || typeof(PO.Config.productSettings) =="undefined" || typeof(PO.Config.variantSettings) =="undefined") {
          return;
        }

        var KT_TOTAL = 0;
        //if(PO.Config.variantSettings.preOrderEnabled === true && PO.Config.variantSettings.comingSoonEnable === true) {
            var style = document.createElement('style');
              style.id = "CountdownTimerUltimate";
              style.innerHTML = `.countdown-KT-full-width {
        width: 100%
      }

      @media (min-width: 981px) {
        .countdown-KT-full-width {
          text-align: center
        }
      }

      @media (max-width: 980px) {
        .countdown-KT-full-width {
          text-align: center
        }
      }

      .countdown-KT {
        margin-top: 0;
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.3
      }

      .countdown-KT .countdown-section-KT {
        display: inline-block
      }

      .countdown-KT .separator-KT {
        color: rgba(0, 0, 0, 1.00);
        position: relative;
        display: inline-block;
        vertical-align: top;
        height: 46px;
        top: 13px;
        margin: 0 5px;
        font-weight: 900
      }

      .countdown-KT .message-KT {
        display: inline-block;
        color: rgba(0, 0, 0, 1.00);
        text-align: center;
        font-family: Josefin Sans, serif;
        font-size: 16pt;
        width: 100%;
        margin: 10px 0;
        padding-left: 5px;
        padding-right: 5px
      }

      .countdown-KT .digit-KT {
        display: inline-block;
        margin: 0 2px;
        width: 28px;
        height: 45px;
        -webkit-perspective: 100px;
        perspective: 100px
      }

      .countdown-KT .title-KT {
        display: block;
        color: rgba(0, 0, 0, 1.00);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 8pt;
        position: relative;
        text-align: center;
        margin-top: 5px
      }

      .countdown-KT .digit-KT .card-back-KT, .countdown-KT .digit-KT .card-KT {
        background-color: rgba(255, 255, 255, 1.00);
        color: rgba(0, 0, 0, 1.00);
        font-family: Josefin Sans, serif;
        font-size: 24pt;
        position: absolute;
        border-radius: 6px 6px 0 0;
        width: 28px;
        height: 22px;
        overflow: hidden;
        text-align: center
      }

      .countdown-KT .digit-KT .card-back-KT, .countdown-KT .digit-KT .card-bottom-back-KT {
        box-shadow: 1px 1px 4px rgba(0, 0, 0, .5)
      }

      .countdown-KT .digit-KT .card-bottom-back-KT, .countdown-KT .digit-KT .card-bottom-KT {
        background-color: rgba(255, 255, 255, 1.00);
        color: rgba(0, 0, 0, 1.00);
        font-family: Josefin Sans, serif;
        font-size: 24pt;
        position: absolute;
        top: 23px;
        border-radius: 0 0 6px 6px;
        width: 28px;
        height: 22px;
        overflow: hidden;
        text-align: center
      }

      .countdown-KT .digit-KT .card-KT, .countdown-KT .digit-KT .card-bottom-back-KT {
        z-index: 1
      }

      .countdown-KT .digit-KT .card-back-KT, .countdown-KT .digit-KT .card-bottom-KT {
        z-index: 0
      }

      .countdown-KT .digit-KT .card-back-text-KT, .countdown-KT .digit-KT .card-text-KT {
        line-height: 1.19;
        position: relative;
        top: 6px
      }

      .countdown-KT .digit-KT .card-bottom-back-text-KT, .countdown-KT .digit-KT .card-bottom-text-KT {
        line-height: 1.19;
        position: relative;
        top: -17px
      }

      .countdown-KT .flip-KT .card-KT {
        -webkit-animation: flipTop-KT .5s cubic-bezier(0.56, 0.56, 0.69, 0.69);
        animation: flipTop-KT .5s cubic-bezier(0.56, 0.56, 0.69, 0.69);
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom
      }

      .countdown-KT .flip-KT .card-bottom-KT {
        z-index: 2;
        -webkit-transform-origin: center top;
        transform-origin: center top;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: flipBottom-KT 1.0s cubic-bezier(0.56, 0.56, 0.69, 0.69);
        animation: flipBottom-KT 1.0s cubic-bezier(0.56, 0.56, 0.69, 0.69)
      }

      @-webkit-keyframes flipTop-KT {
        0% {
          -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg)
        }
        99% {
          -webkit-transform: rotateX(-90deg);
          transform: rotateX(-90deg);
          opacity: 1
        }
        100% {
          opacity: 0
        }
      }

      @keyframes flipTop-KT {
        0% {
          -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg)
        }
        99% {
          -webkit-transform: rotateX(-90deg);
          transform: rotateX(-90deg);
          opacity: 1
        }
        100% {
          opacity: 0
        }
      }

      @-webkit-keyframes flipBottom-KT {
        0% {
          opacity: 0
        }
        50% {
          opacity: 0;
          -webkit-transform: rotateX(90deg);
          transform: rotateX(90deg)
        }
        51% {
          opacity: 1
        }
        100% {
          -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg)
        }
      }

      @keyframes flipBottom-KT {
        0% {
          opacity: 0
        }
        50% {
          opacity: 0;
          -webkit-transform: rotateX(90deg);
          transform: rotateX(90deg)
        }
        51% {
          opacity: 1
        }
        100% {
          -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg)
        }
      }

      .hide-KT {
        display: none
      }

      .fade-in-KT {
        -webkit-animation: fade-in-anim-KT 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: fade-in-anim-KT 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
      }
      .countdown-text{
         margin-bottom: 5px
      }
      .countdown-message{
         font-size: 15px
      }
      @media (max-width: 768px) {
        .countdown-KT .message-KT {
          text-align: center !important
        }
      }

      @-webkit-keyframes fade-in-anim-KT {
        0% {
          opacity: 0
        }
        100% {
          opacity: 1
        }
      }

      @keyframes fade-in-anim-KT {
        0% {
          opacity: 0
        }
        100% {
          opacity: 1
        }
      }

      `;

              logic();


              function logic() {
                document.head.appendChild(style);
                jQuery('body').append(`<div id="KILATECH_CountdownTimer_MAIN" style="display: none !important;">
    </div>`);
              }
        var variant = PO.detectVariant(PO.popup);

        if(variant){
        var obtainedVariantId = variant.id ;
        if(PO.Config.variantSettings[obtainedVariantId].preOrderEnabled === true && PO.Config.variantSettings[obtainedVariantId].comingSoonEnable === true) {
        loadAppkionTimer();
        }
        }
       
        function loadAppkionTimer() {
          //var KT_TOTAL = 0;
          var KT_countdown_update = null;

          function playanimation(old_value_po, new_value_po, type) {
            old_value_po = '0' + old_value_po;
            old_value_po = old_value_po.split("").reverse();
            new_value_po = '0' + new_value_po;
            new_value_po = new_value_po.split("").reverse();
            var left = '.countdown-KT .' + type + '0';
            var right = '.countdown-KT .' + type + '1';
            var isRightFlip = false;
            var isLeftFlip = false;
            isRightFlip = jQuery(right + ' .card-text-KT').text() != jQuery(right + ' .card-back-text-KT').text();
            isLeftFlip = jQuery(left + ' .card-text-KT').text() != jQuery(left + ' .card-back-text-KT').text();
            if (isRightFlip) {
              jQuery(right).addClass("flip-KT");
            }
            if (isLeftFlip) {
              jQuery(left).addClass("flip-KT");
            }
            setTimeout(function () {
              jQuery(right + ' .card-text-KT').html(old_value_po[0]);
              jQuery(right + ' .card-bottom-back-text-KT').html(old_value_po[0]);
              jQuery(right + ' .card-back-text-KT').html(new_value_po[0]);
              jQuery(right + ' .card-bottom-text-KT').html(new_value_po[0]);
              jQuery(left + ' .card-text-KT').html(old_value_po[1]);
              jQuery(left + ' .card-bottom-back-text-KT').html(old_value_po[1]);
              jQuery(left + ' .card-back-text-KT').html(new_value_po[1]);
              jQuery(left + ' .card-bottom-text-KT').html(new_value_po[1]);
              if (isLeftFlip) {
                jQuery(left).removeClass("flip-KT");
              }
              if (isRightFlip) {
                jQuery(right).removeClass("flip-KT");
              }
            }, 900);
          }

          function update_KT_CT() {
            var days_old_po = Math.floor(KT_TOTAL / (60 * 60 * 24));
            var hrs_old_po = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
            var mins_old_po = Math.floor((KT_TOTAL % (60 * 60)) / 60);
            var secs_old_po = KT_TOTAL % (60);
            KT_TOTAL--;
            var days_po = Math.floor(KT_TOTAL / (60 * 60 * 24));
            var hrs_po = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
            var mins_po = Math.floor((KT_TOTAL % (60 * 60)) / 60);
            var secs_po = KT_TOTAL % (60);
            if (KT_TOTAL < 0) {
              jQuery('.countdown-KT-full-width').css("display", "none");
              clearInterval(KT_countdown_update);
              return;
            }
            playanimation(days_old_po, days_po, 'days');
            playanimation(hrs_old_po, hrs_po, 'hrs');
            playanimation(mins_old_po, mins_po, 'mins');
            playanimation(secs_old_po, secs_po, 'secs');
          }

          function initDigit(old_value_po, new_value_po, type) {
            old_value_po = '0' + old_value_po;
            old_value_po = old_value_po.split("").reverse();
            new_value_po = '0' + new_value_po;
            new_value_po = new_value_po.split("").reverse();
            var left = '.countdown-KT .' + type + '0';
            var right = '.countdown-KT .' + type + '1';
            jQuery(right + ' .card-text-KT').html(old_value_po[0]);
            jQuery(right + ' .card-bottom-back-text-KT').html(old_value_po[0]);
            jQuery(right + ' .card-back-text-KT').html(new_value_po[0]);
            jQuery(right + ' .card-bottom-text-KT').html(new_value_po[0]);
            jQuery(left + ' .card-text-KT').html(old_value_po[1]);
            jQuery(left + ' .card-bottom-back-text-KT').html(old_value_po[1]);
            jQuery(left + ' .card-back-text-KT').html(new_value_po[1]);
            jQuery(left + ' .card-bottom-text-KT').html(new_value_po[1]);
          }

          function initValues() {
            var days_old_po = Math.floor(KT_TOTAL / (60 * 60 * 24));
            var hrs_old_po = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
            var mins_old_po = Math.floor((KT_TOTAL % (60 * 60)) / 60);
            var secs_old_po = KT_TOTAL % (60);
            KT_TOTAL--;
            var days_po = Math.floor(KT_TOTAL / (60 * 60 * 24));
            var hrs_po = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
            var mins_po = Math.floor((KT_TOTAL % (60 * 60)) / 60);
            var secs_po = KT_TOTAL % (60);
            initDigit(days_old_po, days_po, 'days');
            initDigit(hrs_old_po, hrs_po, 'hrs');
            initDigit(mins_old_po, mins_po, 'mins');
            initDigit(secs_old_po, secs_po, 'secs');
          }

          function start_Countdown_KT() {

            var variant_id;
            var variant = PO.detectVariant(PO.popup);

            if (variant && PO.popup.variantIsUnavailable(variant)) {
                variant_id = variant.id;
            }
            var variantSetting = PO.Config.variantSettings[variant_id] || {}
            //var productSetting = PO.Config.productSettings[this.product.id] || {}

            KT_TOTAL = variantSetting ? Math.round((variantSetting.comingSoonAvailableFrom - Date.now())/1000) : -1;

            // if(PO.Config.button.countdown_timer_expiration && PO.Config.button.countdown_timer_reset_enabled) {
            if(variantSetting.comingSoonEnable) {
                var n = 2;
                while(KT_TOTAL <= 0) {
                    KT_TOTAL = Math.round((variantSetting.comingSoonAvailableFrom + (n * 86400) - Date.now())/1000);
                    n = n * 2;
                }
            }

            if (KT_TOTAL < 0) {
              return
            }

            initValues();
            KT_countdown_update = window.setInterval(() => {
              update_KT_CT();
            }, 1000);
            jQuery('.countdown-KT-full-width').removeClass('hide-KT');
            jQuery('.countdown-KT-full-width').addClass('fade-in-KT');
          }

          start_Countdown_KT();
        }

        //}

        var atcButtonSelector = POConfig.selectors.atcButtonSelector || "form[action$='/cart/add'] [type='submit']"
        var atcButton = jQuery(atcButtonSelector).first();

        var atcButtonOriginalText = "";
        var atcButtonOriginalBackgroundColor = "";
        var atcButtonOriginalColor = "";
        var atcButtonOriginalFontSize = "";
        var atcButtonOriginalBorderRadius = "";
        var atcButtonOriginalFontWeight = "";
        var atcButtonOriginalBorderWidth = "";
        var atcButtonOriginalBorderColor = "";
        var atcButtonOriginalFontSize = "";
        var atcButtonOriginalFontFamily = "";
        var atcButtonOriginalMarginTop = "";
        var atcButtonOriginalMarginBottom = "";

        if(atcButton.is('input')) {
             atcButtonOriginalText = atcButton.val();
        } else {
             atcButtonOriginalText = atcButton.html();
        }

        atcButtonOriginalBackgroundColor = atcButton.css("background-color")
        atcButtonOriginalColor = atcButton.css("color")
        atcButtonOriginalBorderRadius = atcButton.css("border-radius")
        atcButtonOriginalFontWeight = atcButton.css("font-weight")
        atcButtonOriginalFontSize = atcButton.css("font-size")
        atcButtonOriginalFontFamily = atcButton.css("font-family")
        atcButtonOriginalBorderWidth = atcButton.css("border-width")
        atcButtonOriginalBorderColor = atcButton.css("border-color")
        atcButtonOriginalMarginTop = atcButton.css("margin-top");
        atcButtonOriginalMarginBottom = atcButton.css("margin-bottom");



        var variant_id;
        var updateVariantQuantity = function () {
            var variant = PO.detectVariant(PO.popup);
            if(variant){
                var variantSetting = PO.Config.variantSettings[variant.id] || {}
                if (variantSetting.quantityLimit!= null) {
                 setTimeout(()=>{
                         
                    jQuery.getJSON('/cart.js', function (data) {
                        if (variantSetting && data.items.length) {

                            for (let cartVariant = 0; cartVariant < data.items.length; cartVariant++) {
                                const cartVariantItem = data.items[cartVariant];
                                if (variant.id === cartVariantItem.id) {
                                    var overallAvailable = variantSetting.overallQuantityLimit - variantSetting.totalQuantityOrdered;  
                                    var fixedQuant = variantSetting.quantityLimit;
                                    if(variantSetting.overallQuantityLimit == 0 && variantSetting.quantityLimit == 0 ){
                                      return;
                                    }
                                    if(overallAvailable > 0 && variantSetting.quantityLimit > 0  ){
                                        fixedQuant = Math.min(overallAvailable,variantSetting.quantityLimit);
                                        if(cartVariantItem.quantity >= variantSetting.quantityLimit || cartVariantItem.quantity >= overallAvailable ){
                                           jQuery.post('/cart/change.js', {
                                            id: cartVariantItem.id,
                                            quantity: fixedQuant,
                                        });
                                        setSoldOut();
                                        }
                                    }
                                    if(cartVariantItem.quantity >= variantSetting.quantityLimit && variantSetting.quantityLimit != 0 && variantSetting.overallQuantityLimit == 0){
                                        jQuery.post('/cart/change.js', {
                                         id: cartVariantItem.id,
                                        quantity: variantSetting.quantityLimit,
                                     });
                                     setSoldOut();
                                     }
                                     if(cartVariantItem.quantity >= overallAvailable && variantSetting.quantityLimit == 0 && overallAvailable > 0){
                                        jQuery.post('/cart/change.js', {
                                         id: cartVariantItem.id,
                                         quantity: overallAvailable,
                                     });
                                     setSoldOut();
                                     }
                                    function setSoldOut(){
                                        if(atcButton.is('input')) {
                                           atcButton.val(PO.popup.getSetting(variant.id, "preOrderClosedMessage"))
                                           atcButton.prop("disabled", true);
                                        }else{
                                           atcButton.html(PO.popup.getSetting(variant.id, "preOrderClosedMessage"))
                                           atcButton.prop("disabled", true);
                                        }
                                    }        
                                }
                            }
                        }
                    })
                 },800)
                }
            }
        }

         if (variant && PO.popup.preOrderEnabled(variant) && PO.popup.variantIsUnavailable(variant)){
           jQuery(atcButtonSelector).on("click", function(){
            var cartLabel = PO.Config.variantSettings[variant.id].cartCheckoutLabel;
                  setTimeout(function(){ 
                  let formData = {
                  line : 1,
                  properties: { 'item': cartLabel   }
                };
                fetch('/cart/change.js', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                }).then(response => {
                //console.log("Properties 1")
                })
                .catch((error) => {
                  console.error('Error:', error);
                  fetch('/cart/change.js', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                  }).then(response => {
                   //console.log("Properties 2")
                   })
                 
                });
                }, 450);
            })
         }

        var reload = function () {
          setTimeout(function(){
            try {
                var variant = PO.detectVariant(PO.popup);
               
                if (variant) {
                    var variantSetting = PO.Config.variantSettings[variant.id] || {}
                    //commingsoon counter section
                    if (variant && PO.popup.variantIsUnavailable(variant)) {
                        var countdownTimer = jQuery('<div class="countdown-KT-full-width hide-KT" id="countdownultimate-KT"><div class="countdown-KT"><div class="message-KT"><h3 id="comingSoonHeader" class="countdown-text"/><span id="comingSoonMessage" class="countdown-message countdown-text"/></div><br style="height: 0px;"><div class="countdown-section-KT day"><div class="digit-KT days0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT days1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">DAYS</div></div><div class="separator-KT sday">:</div><div class="countdown-section-KT hour"><div class="digit-KT hrs0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT hrs1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">HRS</div></div><div class="separator-KT shour">:</div><div class="countdown-section-KT minute"><div class="digit-KT mins0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT mins1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">MINS</div></div><div class="separator-KT sminute">:</div><div class="countdown-section-KT second"><div class="digit-KT secs0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT secs1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">SECS</div></div><div style="text-align: right;display: block !important;width: 100% !important; max-width: 100% !important; height: 100% !important; max-height: 100% !important;"></div></div></div>');
                        if (variantSetting.comingSoonEnable && KT_TOTAL >= 0 && variantSetting.preOrderEnabled) {
                            jQuery('form[action="/cart/add"]').append(countdownTimer);
                        }
                        if (variantSetting.comingSoonEnable && KT_TOTAL >= 0 && variantSetting.preOrderEnabled) {
                            document.getElementById('comingSoonHeader').innerHTML = variantSetting.comingSoonHeader ? variantSetting.comingSoonHeader : "";
                            document.getElementById('comingSoonMessage').innerHTML = variantSetting.comingSoonMessage ? variantSetting.comingSoonMessage : "";
                            if ($("#countdownultimate-KT").is(":visible")) {
                                console.log("visiable")
                            } else {
                                countdownTimer.show();
                            }
                        }
                    }

                    var IsAvailableByOverAllQuantity = true;
                    if(variantSetting.overallQuantityLimit == 0){
                      IsAvailableByOverAllQuantity = true;
                    }else{
                      var availableOnly = variantSetting.overallQuantityLimit - variantSetting.totalQuantityOrdered;
                      IsAvailableByOverAllQuantity = availableOnly > 0 ? true : false ;
                    }
                    if (variant && PO.popup.preOrderEnabled(variant) && PO.popup.variantIsUnavailable(variant) && IsAvailableByOverAllQuantity === true) {
                        var START_DATE = 0;
                        var END_DATE = 0;
                        if (variantSetting.preOrderTimeEnable) {
                            START_DATE = Math.round(variantSetting.dateStart / 1000);
                            END_DATE = Math.round(variantSetting.dateStop / 1000);
                        }
                        var availableOnly = variantSetting.overallQuantityLimit - variantSetting.totalQuantityOrdered
                        var TODAY = Math.round(Date.now() / 1000);
                        if ((variantSetting.preOrderTimeEnable && (TODAY >= START_DATE && TODAY <= END_DATE)) || !variantSetting.preOrderTimeEnable) {
                            variant_id = variant.id;
                            updateVariantQuantity()
                            atcButton.addClass('appikon-pre-order-button');
                             jQuery(".appikon-pre-order-button").css("background-color", PO.Config.button.buttonBackgroundColor);
                             jQuery(".appikon-pre-order-button").css("border-color", PO.Config.button.buttonBorderColor);
                             jQuery(".appikon-pre-order-button").css("border-radius", PO.Config.button.buttonBorderRadius+"px");
                             jQuery(".appikon-pre-order-button").css("border-width", PO.Config.button.buttonBorderWidth+"px");
                             jQuery(".appikon-pre-order-button").css("color", PO.Config.button.buttonColor);
                             jQuery(".appikon-pre-order-button").css("padding-left", PO.Config.button.buttonPaddingLeft+"px");
                             jQuery(".appikon-pre-order-button").css("padding-top", PO.Config.button.buttonPaddingTop+"px");
                             jQuery(".appikon-pre-order-button").css("font-size", PO.Config.button.buttonFontSize+"px");
                             jQuery(".appikon-pre-order-button").css("font-family", PO.Config.button.buttonFontFamily);
                             jQuery(".appikon-pre-order-button").css("font-weight", PO.Config.button.buttonFontWeight+"px");
                             jQuery(".appikon-pre-order-button").css("text-decoration", PO.Config.button.buttonTextDecoration);
                             jQuery(".appikon-pre-order-button").css("margin-top", PO.Config.button.buttonMarginTop+"px");
                             jQuery(".appikon-pre-order-button").css("margin-bottom", PO.Config.button.buttonMarginBottom+"px");
                            atcButton.prop("disabled", false);
                            if(PO.Config.defaultSetting.buttonMessageVisibility == "ON_HOVER"){

                              if (PO.popup.getSetting(variant.id, "buttonMessage")) {
                                var hoverMessage =  PO.Config.defaultSetting.buttonMessage.length < 1 ? PO.popup.getSetting(variant.id, "buttonMessage") : PO.Config.defaultSetting.buttonMessage
                                  atcButton.prop("title",hoverMessage);
                              }
                            }


                            if(atcButton.is('input')) {
                                 atcButton.val(PO.popup.getSetting(variant.id, "buttonText"))
                            } else {
                                 atcButton.html(PO.popup.getSetting(variant.id, "buttonText"))
                            }

                            if(PO.Config.defaultSetting.buttonMessageVisibility == "ALWAYS" && jQuery('.po-button-message-class').length < 1){

                             var alwaysMessage =  PO.Config.defaultSetting.buttonMessage.length < 1 ? PO.popup.getSetting(variant.id, "buttonMessage") : PO.Config.defaultSetting.buttonMessage
                               jQuery("<span class='po-button-message-class'>"+ alwaysMessage +"</span>").insertAfter(atcButtonSelector);
                            }

                            hidePaymentButtons()
                        }

                    } else {
                        atcButton.removeClass('appikon-pre-order-button');
                        atcButton.css("background-color", atcButtonOriginalBackgroundColor);
                        atcButton.css("border-color", atcButtonOriginalBorderColor);
                        atcButton.css("border-radius", atcButtonOriginalBorderRadius);
                        atcButton.css("border-width", atcButtonOriginalBorderWidth);
                        atcButton.css("color", atcButtonOriginalColor)
                        atcButton.css("font-size", atcButtonOriginalFontSize);
                        atcButton.css("font-family", atcButtonOriginalFontFamily);
                        atcButton.css("font-weight", atcButtonOriginalFontWeight);
                        atcButton.css("margin-top", atcButtonOriginalMarginTop);
                        atcButton.css("margin-bottom", atcButtonOriginalMarginBottom);
                        atcButton.prop("title","");
                        if(jQuery('.po-button-message-class').length > 0){
                          jQuery('.po-button-message-class').remove();
                        }

                        if(atcButton.is('input')) {
                             atcButton.val(atcButtonOriginalText)
                        } else {
                             atcButton.html(atcButtonOriginalText)
                        }
                        // If bis button is not present then only show payment button
                        if(!PO.popup.variantIsUnavailable(variant)){
                           showPaymentButtons()
                        }

                        if(PO.popup.variantIsUnavailable(variant)){

                          if(atcButton.is('input')) {
                              atcButton.val(PO.popup.getSetting(variant.id, "preOrderClosedMessage"));
                          } else {
                           
                              atcButton.prop("disabled", true);
                              atcButton.html(PO.popup.getSetting(variant.id, "preOrderClosedMessage"));
                          }
                        }

                    }
                }
            } catch (e) {
                console.log(e)
            }

           }, 100);

          }


        setTimeout(reload, 13);
        jQuery(document).on('change', reload);
        jQuery(document).on('click', updateVariantQuantity);
        jQuery(document).on('click', reload);
      });
    }


      deferBisProductPageButton(setBisProductPageButtonStyles);
    }

    function setBisProductPageButtonStyles() {



      var mainButtonSettings = PO.Config.main_button;

      var mainButton = jQuery("#PO_trigger");

      if(mainButtonSettings.main_caption) {
        if(mainButton.is('input')) {
          mainButton.val(mainButtonSettings.main_caption);
        } else {
          mainButton.html(mainButtonSettings.main_caption);
        }
      }

      if(mainButtonSettings.main_css_classes) {
        var originalMainCssClasses = mainButton.attr("class");
        mainButton.attr( "class", mainButtonSettings.main_css_classes.trim() + " " + originalMainCssClasses);
      }

      if(mainButtonSettings.main_button_width) {
        mainButton.css("width", mainButtonSettings.main_button_width + "%");
      }

      if(mainButtonSettings.main_button_height) {
        mainButton.css("height", mainButtonSettings.main_button_height + "px");
      }

      if(mainButtonSettings.main_caption_size) {
        mainButton.css("font-size", mainButtonSettings.main_caption_size + "px");
      }

      if(mainButtonSettings.main_margin_top) {
        mainButton.css("margin-top",  mainButtonSettings.main_margin_top + "px");
      }

      if(mainButtonSettings.main_margin_bottom) {
        mainButton.css("margin-bottom", mainButtonSettings.main_margin_bottom + "px");
      }

      if(mainButtonSettings.main_margin_left) {
        mainButton.css("margin-left", mainButtonSettings.main_margin_left + "px");
      }

      if(mainButtonSettings.main_margin_right) {
        mainButton.css("margin-right", mainButtonSettings.main_margin_right + "px");
      }

      if(mainButtonSettings.main_text_color) {
        mainButton.css("color", mainButtonSettings.main_text_color);
      }

      if(mainButtonSettings.main_hover_text_color) {
        var originalMainButtonHoverTextColor;
        mainButton.hover(
          function(){
            originalMainButtonHoverTextColor = jQuery(this).css("color");
            jQuery(this).css("color", mainButtonSettings.main_hover_text_color);
          },
          function(){
            jQuery(this).css("color", originalMainButtonHoverTextColor
              ? originalMainButtonHoverTextColor
              : "");
          }
        );
      }

      if(mainButtonSettings.main_text_style) {
        switch (mainButtonSettings.main_text_style) {
            case 'NORMAL':
              mainButton.css("font-weight", "normal");
              mainButton.css("font-style", "normal");
              break;

            case 'BOLD':
              mainButton.css("font-weight", "bold");
              break;

            case 'ITALIC':
              mainButton.css("font-style", "italic");
              break;

            case 'UNDERLINE':
              mainButton.css("text-decoration", "underline");
              break;

            default:
        }
      }

      if(mainButtonSettings.main_background_color) {
        mainButton.css("background-color", mainButtonSettings.main_background_color);
      }

      if(mainButtonSettings.main_hover_background_color) {
        var originalMainHoverBgColor;
        mainButton.hover(
          function(){
            originalMainHoverBgColor = jQuery(this).css("background-color");
            jQuery(this).css("background-color", mainButtonSettings.main_hover_background_color);
          },
          function(){
            jQuery(this).css("background-color", originalMainHoverBgColor
              ? originalMainHoverBgColor
              : "");
          }
        );
      }

      if(mainButtonSettings.main_border_color) {
        mainButton.css("border-color", mainButtonSettings.main_border_color);
      }

      if(mainButtonSettings.main_hover_border_color) {
        var originalMainHoverBorderColor;
        mainButton.hover(
          function(){
            originalMainHoverBorderColor = jQuery(this).css("border-color");
            jQuery(this).css("border-color", mainButtonSettings.main_hover_border_color);
          },
          function(){
            jQuery(this).css("border-color", originalMainHoverBorderColor
              ? originalMainHoverBorderColor
              : "");
          }
        );
      }

      if(mainButtonSettings.main_border_size) {
        mainButton.css("border-width", mainButtonSettings.main_border_size + "px");
      }

      if(mainButtonSettings.main_border_radius) {
        mainButton.css("border-radius", mainButtonSettings.main_border_radius + "px");
      }
    }

    PO.domReady().then(deferJquery(poProductPageFunction));

    function hidePaymentButtons() {
        jQuery(POConfig.selectors.payment_button_selectors).hide();
    }

    function showPaymentButtons() {
        jQuery(POConfig.selectors.payment_button_selectors).show();
    }

  }
)();



