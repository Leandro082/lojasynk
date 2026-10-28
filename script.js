// PERSONALIZE AQUI: use o WhatsApp com código do país e DDD, somente números.
    const STORE = {
      whatsapp: "5541987642478", // WhatsApp oficial da SYNK
      email: "contato@sualoja.com.br",
      instagram: "https://www.instagram.com/seu_perfil/"
    };

    // Produtos de demonstração. Ajuste preços, descrições, volumes e imagens antes de publicar.
    // Para adicionar foto real, informe uma URL no campo image: "https://.../foto.jpg"
    const productsData = [
  {
    "id": 1,
    "name": "Club de Nuit Blue Iconic",
    "brand": "Armaf",
    "category": "Árabe",
    "price": 249.9,
    "volume": "105 ml",
    "gender": "Masculino",
    "family": "Amadeirado cítrico",
    "notes": "Toranja, hortelã, limão, gengibre, melão, incenso, notas amadeiradas, cedro e âmbar.",
    "description": "Uma fragrância envolvente, fresca e marcante, ideal para quem aprecia perfumes amadeirados cítricos de alta sofisticação.",
    "emoji": "🔵",
    "tag": "Árabe",
    "image": "images/club-de-nuit-iconic-1.jpg",
    "secondaryImage": "images/club-de-nuit-iconic-2.jpg"
  },
  {
    "id": 2,
    "name": "Khamrah Qahwa",
    "brand": "Lattafa",
    "category": "Árabe",
    "price": 199.9,
    "volume": "100 ml",
    "gender": "Unissex",
    "family": "Oriental especiado gourmand",
    "notes": "Canela, cardamomo, gengibre, café arábica, pralinê, frutas cristalizadas, baunilha, fava tonka, benjoim e âmbar.",
    "description": "Uma fragrância envolvente, quente e extremamente gourmand, ideal para quem aprecia perfumes orientais especiados com um toque marcante de café e especiarias.",
    "emoji": "☕",
    "tag": "Gourmand",
    "image": "images/khamrah-qahwa-1.jpg",
    "secondaryImage": "images/khamrah-qahwa-2.jpg"
  },
  {
    "id": 3,
    "name": "Asad Bourbon",
    "brand": "Lattafa",
    "category": "Árabe",
    "price": 249.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Oriental especiado",
    "notes": "Ameixa mirabelle, pimenta rosa, lavanda, cacau, noz-moscada, davana, baunilha de Bourbon, âmbar e vetiver.",
    "description": "Uma fragrância envolvente, quente e licorosa, ideal para quem aprecia perfumes orientais especiados marcantes com toque de baunilha e cacau.",
    "emoji": "🥃",
    "tag": "Intenso",
    "image": "images/asad-bourbon-1.jpg",
    "secondaryImage": "images/asad-bourbon-2.jpg"
  },
  {
    "id": 4,
    "name": "Asad Elixir",
    "brand": "Lattafa",
    "category": "Árabe",
    "price": 279.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Oriental amadeirada",
    "notes": "Toranja, pimenta rosa, açafrão, tabaco, cedro, baunilha, patchouli, olíbano e cashmeran.",
    "description": "Uma fragrância envolvente, densa e misteriosa, ideal para quem aprecia perfumes orientais amadeirados intensos e refinados com nuances de tabaco e especiarias quentes.",
    "emoji": "⚫",
    "tag": "Marcante",
    "image": "images/asad-elixir-1.jpg",
    "secondaryImage": "images/asad-elixir-2.jpg"
  },
  {
    "id": 5,
    "name": "Pride Pisa",
    "brand": "Lattafa",
    "category": "Árabe",
    "price": 339.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Aromático frutado (ou Cítrico amadeirado)",
    "notes": "Mandarina, limão, bergamota, cedro, sândalo e âmbar.",
    "description": "Uma fragrância envolvente, fresca e altamente sofisticada, ideal para quem aprecia perfumes cítricos marcantes com uma base amadeirada nobre e elegante.",
    "emoji": "🍋",
    "tag": "Fresco",
    "image": "images/pride-pisa-1.jpg",
    "secondaryImage": "images/pride-pisa-2.png"
  },
  {
    "id": 6,
    "name": "Mare di Amalfi Azure",
    "brand": "L'Affair",
    "category": "Árabe",
    "price": 129.9,
    "volume": "100 ml",
    "gender": "Unissex",
    "family": "Cítrico aromático",
    "notes": "Limão, toranja, hortelã, manjericão, flor de laranjeira, pimenta preta, jasmim, sálvia, ládano, vetiver, âmbar e almíscar.",
    "description": "Uma fragrância envolvente, fresca e revigorante, ideal para quem aprecia perfumes cítricos aromáticos com cheiro de pós-banho e sofisticação mediterrânea.",
    "emoji": "🌊",
    "tag": "Revigorante",
    "image": "images/mare-di-amalfi-azure-1.jpg",
    "secondaryImage": "images/mare-di-amalfi-azure-2.png"
  },
  {
    "id": 7,
    "name": "Nautica Voyage",
    "brand": "Nautica",
    "category": "Importado",
    "price": 139.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Aquática amadeirada",
    "notes": "Maçã verde, folhas verdes, flor de lótus, mimosa, cedro, almíscar e âmbar.",
    "description": "Uma fragrância envolvente, fresca e revigorante, ideal para quem aprecia perfumes aquáticos marcantes.",
    "emoji": "🌊",
    "tag": "Aquático",
    "image": "images/nautica-voyage-1.jpg",
    "secondaryImage": "images/nautica-voyage-2.jpg"
  },
  {
    "id": 8,
    "name": "Silver Scent",
    "brand": "Jacques Bogart",
    "category": "Importado",
    "price": 199.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Oriental amadeirado",
    "notes": "Flor de laranjeira, limão gelado, lavanda, noz-moscada, cardamomo, lichia, fava tonka e madeira de teca.",
    "description": "Uma fragrância envolvente, intensa e bombástica, ideal para quem aprecia perfumes orientais marcantes de altíssima projeção.",
    "emoji": "⚫",
    "tag": "Importado",
    "image": "images/silver-scent-produto.jpg",
    "secondaryImage": "images/silver-scent-ambientacao.jpg"
  },
  {
    "id": 9,
    "name": "212 VIP Black",
    "brand": "Carolina Herrera",
    "category": "Importado",
    "price": 499.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Aromático Fougère",
    "notes": "Absinto, anis, erva-doce, lavanda, casca de baunilha negra, almíscar e âmbar.",
    "description": "Uma fragrância envolvente, picante e profundamente ousada, ideal para quem aprecia perfumes aromáticos intensos e festivos.",
    "emoji": "🖤",
    "tag": "Importado",
    "image": "images/212-vip-black-1.jpg",
    "secondaryImage": "images/212-vip-black-2.jpg"
  },
  {
    "id": 10,
    "name": "Animale for Men",
    "brand": "Animale",
    "category": "Importado",
    "price": 199.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Oriental aromático",
    "notes": "Hortelã, citrinos, néroli, lavanda, noz-moscada, bagas de zimbro, sândalo, cedro, couro, âmbar e musgo de carvalho.",
    "description": "Uma fragrância envolvente, fresca e magnética, ideal para quem aprecia perfumes orientais aromáticos clássicos e cheios de personalidade.",
    "emoji": "🌿",
    "tag": "Importado",
    "image": "images/animale-for-men-1.jpg",
    "secondaryImage": "images/animale-for-men-2.jpg"
  },
  {
    "id": 11,
    "name": "Khaltaat Al Arabia Royal Blends",
    "brand": "Lattafa",
    "category": "Árabe",
    "price": 109.9,
    "volume": "100 ml",
    "gender": "Unissex",
    "family": "Oriental especiado",
    "notes": "Frutas, maçã, noz-moscada, cravo-da-índia, notas especiadas, âmbar, almíscar e notas amadeiradas.",
    "description": "Uma fragrância envolvente, quente e adocicada, ideal para quem aprecia perfumes orientais especiados com um toque marcante de maçã e especiarias.",
    "emoji": "🍎",
    "tag": "Oriental",
    "image": "images/khaltaat-royal-blends-1.jpg",
    "secondaryImage": "images/khaltaat-royal-blends-2.jpg"
  },
  {
    "id": 12,
    "name": "Odyssey Mandarin Sky",
    "brand": "Armaf",
    "category": "Árabe",
    "price": 229.9,
    "volume": "100 ml",
    "gender": "Masculino",
    "family": "Âmbar amadeirada",
    "notes": "Mandarina, laranja, açafrão, sálvia, caramelo, fava tonka, tagetes, ambroxan, cedro e vetiver.",
    "description": "Uma fragrância envolvente, doce e cítrica, ideal para quem aprecia perfumes âmbar amadeirados modernos e marcantes.",
    "emoji": "🍊",
    "tag": "Árabe",
    "image": "images/odyssey-mandarin-sky-1.jpg",
    "secondaryImage": "images/odyssey-mandarin-sky-2.jpg"
  }
];

    const money = value => value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
    let cart = JSON.parse(sessionStorage.getItem("synkCartV2") || "[]");
    const productsEl = document.getElementById("products");
    const cartOverlay = document.getElementById("cartOverlay");
    const modalWrap = document.getElementById("detailModal");

    function safeText(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
    function renderProducts(){
      let list = [...productsData];
      const q = document.getElementById("search").value.trim().toLowerCase();
      const category = document.getElementById("category").value;
      const sort = document.getElementById("sort").value;
      list = list.filter(p => (category==="todos"||p.category===category) && `${p.name} ${p.brand} ${p.family}`.toLowerCase().includes(q));
      if(sort==="low") list.sort((a,b)=>a.price-b.price);
      if(sort==="high") list.sort((a,b)=>b.price-a.price);
      if(sort==="az") list.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));
      productsEl.innerHTML = list.length ? list.map(p=>`
        <article class="product">
          <div class="product-photo">${p.image ? `<img src="${safeText(p.image)}" alt="${safeText(p.name)}" loading="lazy">` : `<span class="emoji" aria-hidden="true">${p.emoji}</span>`}<span class="tag">${safeText(p.tag)}</span></div>
          <div class="product-info"><div class="product-brand">${safeText(p.brand)} · ${safeText(p.category)}</div><h3>${safeText(p.name)}</h3><div class="product-desc">${safeText(p.family)} · ${safeText(p.volume)}</div><p class="image-disclaimer">Imagens meramente ilustrativas.</p><div class="price">${money(p.price)}</div>
          <div class="product-actions"><button class="small-btn" onclick="showDetails(${p.id})">Ver detalhes</button><button class="small-btn primary" onclick="addToCart(${p.id})">Adicionar</button></div></div>
        </article>`).join("") : `<div class="empty">Nenhum perfume encontrado. Tente outro nome ou categoria.</div>`;
    }
    function persist(){sessionStorage.setItem("synkCartV2",JSON.stringify(cart));renderCart();}
    function addToCart(id){
      const p=productsData.find(x=>x.id===id); if(!p)return;
      const item=cart.find(x=>x.id===id);
      if(item)item.qty++;else cart.push({id,qty:1});
      persist(); toast("Produto adicionado no carrinho");
    }
    function changeQty(id,delta){
      const item=cart.find(x=>x.id===id);if(!item)return;
      item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);
      persist();
    }
    function removeItem(id){cart=cart.filter(x=>x.id!==id);persist();}
    function renderCart(){
      const count=cart.reduce((sum,item)=>sum+item.qty,0);
      document.getElementById("cartCount").textContent=count;
      const itemsEl=document.getElementById("cartItems");
      if(!cart.length)itemsEl.innerHTML='<div class="empty">Seu carrinho está vazio.<br>Adicione um perfume para começar.</div>';
      else itemsEl.innerHTML=cart.map(item=>{
        const p=productsData.find(x=>x.id===item.id);if(!p)return "";
        return `<div class="cart-item"><div class="cart-thumb">${(p.secondaryImage||p.image)?`<img src="${safeText(p.secondaryImage||p.image)}" alt="${safeText(p.name)}" loading="lazy">`:p.emoji}</div><div><h4>${safeText(p.name)}</h4><p>${money(p.price)} cada</p><div class="qty"><button aria-label="Diminuir quantidade" onclick="changeQty(${p.id},-1)">−</button><span>${item.qty}</span><button aria-label="Aumentar quantidade" onclick="changeQty(${p.id},1)">+</button></div><button class="remove" onclick="removeItem(${p.id})">Remover</button></div><strong>${money(p.price*item.qty)}</strong></div>`;
      }).join("");
      const total=cart.reduce((sum,item)=>{const p=productsData.find(x=>x.id===item.id);return sum+(p?p.price*item.qty:0)},0);
      document.getElementById("cartTotal").textContent=money(total);
      document.getElementById("checkout").disabled=!cart.length;
    }
    function showDetails(id){
      const p=productsData.find(x=>x.id===id);if(!p)return;
      document.getElementById("modalContent").innerHTML=`<div class="modal-content"><div class="modal-art">${p.image?`<img class="detail-main-image" src="${safeText(p.image)}" alt="${safeText(p.name)}" loading="lazy">${p.secondaryImage?`<img class="detail-secondary-image" src="${safeText(p.secondaryImage)}" alt="${safeText(p.name)} em foto ambientada" loading="lazy">`:''}`:p.emoji}</div><div><div class="product-brand">${safeText(p.brand)} · ${safeText(p.category)}</div><h2>${safeText(p.name)}</h2><div class="price">${money(p.price)}</div><p>${safeText(p.description)}</p><p class="image-disclaimer">Imagens meramente ilustrativas.</p><ul class="detail-list"><li><b>Volume:</b> ${safeText(p.volume)}</li><li><b>Indicação:</b> ${safeText(p.gender)}</li><li><b>Família olfativa:</b> ${safeText(p.family)}</li><li><b>Notas olfativas:</b> ${safeText(p.notes)}</li></ul><button class="btn btn-dark" onclick="addToCart(${p.id});closeDetails()" style="width:100%">Adicionar ao carrinho</button></div></div>`;
      modalWrap.classList.add("open");
    }
    function closeDetails(){modalWrap.classList.remove("open")}
    function toast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove("show"),2400);}
    function openCart(){cartOverlay.classList.add("open");document.body.style.overflow="hidden"}
    function closeCart(){cartOverlay.classList.remove("open");document.body.style.overflow=""}
    const checkoutModal = document.getElementById("checkoutModal");
    function checkout(){
      if(!cart.length)return;
      checkoutModal.classList.add("open");
      document.body.style.overflow="hidden";
    }
    function closeCheckout(){checkoutModal.classList.remove("open");document.body.style.overflow="";}
    document.getElementById("closeCheckout").addEventListener("click",closeCheckout);
    checkoutModal.addEventListener("click",e=>{if(e.target===checkoutModal)closeCheckout()});
    document.getElementById("paymentMethod").addEventListener("change",e=>{
      const isCard=e.target.value==="Cartão de crédito";
      document.getElementById("installmentsWrap").hidden=!isCard;
      document.getElementById("installments").required=isCard;
    });
    document.getElementById("lookupCep").addEventListener("click",async()=>{
      const input=document.getElementById("customerCep");
      const cep=input.value.replace(/\D/g,"");
      const status=document.getElementById("cepStatus");
      if(!/^\d{8}$/.test(cep)){status.textContent="Digite um CEP válido com 8 números.";return;}
      status.textContent="Consultando CEP…";
      try{
        const response=await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if(!response.ok)throw new Error("Falha na consulta");
        const data=await response.json();
        if(data.erro)throw new Error("CEP não encontrado");
        document.getElementById("customerStreet").value=data.logradouro||"";
        document.getElementById("customerNeighborhood").value=data.bairro||"";
        document.getElementById("customerCity").value=data.localidade||"";
        document.getElementById("customerState").value=data.uf||"";
        status.textContent="Endereço encontrado. Confira e complete número e complemento.";
      }catch(err){status.textContent="Não foi possível localizar o CEP. Confira o número e preencha o endereço manualmente.";}
    });
    document.getElementById("customerCep").addEventListener("input",e=>{
      let v=e.target.value.replace(/\D/g,"").slice(0,8);if(v.length>5)v=v.slice(0,5)+"-"+v.slice(5);e.target.value=v;
    });
    document.getElementById("checkoutForm").addEventListener("submit",e=>{
      e.preventDefault();
      if(!cart.length)return;
      if(!/^\d{10,15}$/.test(STORE.whatsapp)){alert("Configure o número do WhatsApp da loja no início do JavaScript antes de receber pedidos.");return;}
      const f=new FormData(e.currentTarget);
      const lines=cart.map(item=>{const p=productsData.find(x=>x.id===item.id);return p?`• ${p.name} (${p.brand}) — ${item.qty} x ${money(p.price)} = ${money(p.price*item.qty)}`:""}).filter(Boolean);
      const total=cart.reduce((sum,item)=>{const p=productsData.find(x=>x.id===item.id);return sum+(p?p.price*item.qty:0)},0);
      const payment=f.get("paymentMethod")==="Cartão de crédito"?`Cartão de crédito em ${f.get("installments")}x (acréscimo da maquininha a confirmar)`:f.get("paymentMethod");
      const address=`${f.get("customerStreet")}, nº ${f.get("customerNumber")}${f.get("customerComplement")?", "+f.get("customerComplement"):""}, ${f.get("customerNeighborhood")}, ${f.get("customerCity")}/${f.get("customerState")}, CEP ${f.get("customerCep")}`;
      const message=`Olá! Gostaria de finalizar este pedido:\n\n${lines.join("\n")}\n\nTotal dos produtos: ${money(total)}\n\nDADOS DO CLIENTE\nNome: ${f.get("customerName")}\nTelefone: ${f.get("customerPhone")}\nEndereço: ${address}\n\nForma de pagamento: ${payment}\nFrete: solicito cálculo/confirmacão conforme o CEP informado.\nPor favor, confirme o valor final, incluindo frete e eventual acréscimo da maquininha.`;
      window.open(`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`,"_blank","noopener");
      closeCheckout();
    });
    document.getElementById("search").addEventListener("input",renderProducts);
    document.getElementById("category").addEventListener("change",renderProducts);
    document.getElementById("sort").addEventListener("change",renderProducts);
    document.getElementById("openCart").addEventListener("click",openCart);
    document.getElementById("closeCart").addEventListener("click",closeCart);
    document.getElementById("closeModal").addEventListener("click",closeDetails);
    document.getElementById("checkout").addEventListener("click",checkout);
    cartOverlay.addEventListener("click",e=>{if(e.target===cartOverlay)closeCart()});
    modalWrap.addEventListener("click",e=>{if(e.target===modalWrap)closeDetails()});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeDetails();closeCheckout()}});
    document.getElementById("whatsLink").textContent="+55 (41) 98764-2478";
    document.getElementById("whatsLink").href=`https://wa.me/${STORE.whatsapp}`;
    document.getElementById("emailLink").textContent=STORE.email;document.getElementById("emailLink").href=`mailto:${STORE.email}`;
    document.getElementById("instaLink").href=STORE.instagram;document.getElementById("instaLink").textContent=STORE.instagram.includes("seu_perfil")?"Configure o Instagram":"@Instagram da loja";
    renderProducts();renderCart();
