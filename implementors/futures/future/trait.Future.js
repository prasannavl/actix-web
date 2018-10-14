(function() {var implementors = {};
implementors["actix_web"] = [{text:"impl&lt;A, B, I, E&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"enum\" href=\"actix_web/enum.Either.html\" title=\"enum actix_web::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = I, Error = E&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = I, Error = E&gt;,&nbsp;</span>",synthetic:false,types:["actix_web::handler::Either"]},{text:"impl&lt;I, E&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"actix_web/dev/struct.AsyncResult.html\" title=\"struct actix_web::dev::AsyncResult\">AsyncResult</a>&lt;I, E&gt;",synthetic:false,types:["actix_web::handler::AsyncResult"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"actix_web/dev/struct.MessageBody.html\" title=\"struct actix_web::dev::MessageBody\">MessageBody</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a> + 'static,&nbsp;</span>",synthetic:false,types:["actix_web::httpmessage::MessageBody"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"actix_web/dev/struct.UrlEncoded.html\" title=\"struct actix_web::dev::UrlEncoded\">UrlEncoded</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.80/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + 'static,&nbsp;</span>",synthetic:false,types:["actix_web::httpmessage::UrlEncoded"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a> + 'static, U:&nbsp;<a class=\"trait\" href=\"https://docs.rs/serde/1.0.80/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + 'static&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"actix_web/dev/struct.JsonBody.html\" title=\"struct actix_web::dev::JsonBody\">JsonBody</a>&lt;T, U&gt;",synthetic:false,types:["actix_web::json::JsonBody"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"actix_web/client/struct.SendRequest.html\" title=\"struct actix_web::client::SendRequest\">SendRequest</a>",synthetic:false,types:["actix_web::client::pipeline::SendRequest"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"actix_web/ws/struct.ClientHandshake.html\" title=\"struct actix_web::ws::ClientHandshake\">ClientHandshake</a>",synthetic:false,types:["actix_web::ws::client::ClientHandshake"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
