import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BoycottItem, Category } from '../models/flashcard.model';

@Injectable({
  providedIn: 'root'
})
export class BoycottService {
  private categories: Category[] = [
    { id: '1', name: 'Otomotiv', description: 'Araba, lastik ve araç üreticileri', icon: 'directions_car' },
    { id: '2', name: 'Medya', description: 'TV, radyo ve yayın kuruluşları', icon: 'tv' },
    { id: '3', name: 'Turizm & Otelcilik', description: 'Otel zincirleri ve turistik işletmeler', icon: 'hotel' },
    { id: '4', name: 'Perakende & Yemek', description: 'Restoranlar ve alışveriş markaları', icon: 'restaurant' },
    { id: '5', name: 'İnşaat', description: 'İnşaat ve gayrimenkul şirketleri', icon: 'apartment' },
    { id: '6', name: 'Holdingler', description: 'Çeşitli alanlarda faaliyet gösteren gruplar', icon: 'business' }
  ];

  private boycottItems: BoycottItem[] = [
    // Doğuş Holding
    { 
      id: '1', 
      companyName: 'Doğuş Holding', 
      description: 'Ferit Şahenk\'in sahibi olduğu Doğuş Holding, çeşitli sektörlerde faaliyet göstermektedir. Otomotiv, inşaat, medya ve turizm sektörlerindeki birçok marka bu holding altında yer almaktadır.', 
      categoryId: '6',
    },
    { 
      id: '2', 
      companyName: 'Volkswagen Doğuş Finans (VDF)', 
      description: 'Doğuş Holding\'in otomotiv finansman şirketi.', 
      categoryId: '1',
    },
    { 
      id: '3', 
      companyName: 'Doğuş İnşaat', 
      description: 'Doğuş Holding\'in inşaat sektöründeki şirketi.', 
      categoryId: '5',
    },
    { 
      id: '4', 
      companyName: 'NTV', 
      description: 'Doğuş Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '5', 
      companyName: 'Star TV', 
      description: 'Doğuş Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '6', 
      companyName: 'Nusr-Et Steakhouse', 
      description: 'Doğuş Holding bünyesindeki D.ream grubuna bağlı restoran zinciri.', 
      categoryId: '4',
    },
    { 
      id: '7', 
      companyName: 'D-Maris Bay', 
      description: 'Doğuş Grubu\'nun lüks otel zinciri.', 
      categoryId: '3',
    },
    { 
      id: '36', 
      companyName: 'Volkswagen', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '37', 
      companyName: 'Audi', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '38', 
      companyName: 'Porsche', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '39', 
      companyName: 'Bentley', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '40', 
      companyName: 'Lamborghini', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '41', 
      companyName: 'Bugatti', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '42', 
      companyName: 'Seat', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '43', 
      companyName: 'Scania', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '44', 
      companyName: 'Tüvtürk', 
      description: 'Doğuş Holding\'in otomotiv sektöründeki markaları arasında yer alır.', 
      categoryId: '1',
    },
    { 
      id: '45', 
      companyName: 'Kral TV', 
      description: 'Doğuş Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '46', 
      companyName: 'Radyo Eksen', 
      description: 'Doğuş Medya Grubu bünyesindeki radyo kanalı.', 
      categoryId: '2',
    },
    { 
      id: '47', 
      companyName: 'NTV Radyo', 
      description: 'Doğuş Medya Grubu bünyesindeki radyo kanalı.', 
      categoryId: '2',
    },
    { 
      id: '48', 
      companyName: 'Kral FM', 
      description: 'Doğuş Medya Grubu bünyesindeki radyo kanalı.', 
      categoryId: '2',
    },

    // Demirören Grubu
    { 
      id: '8', 
      companyName: 'Demirören Grubu', 
      description: 'Birçok sektörde faaliyet gösteren, özellikle medya sektöründe geniş etkiye sahip holding.', 
      categoryId: '6',
    },
    { 
      id: '9', 
      companyName: 'Hürriyet', 
      description: 'Demirören Medya Grubu bünyesindeki gazete.', 
      categoryId: '2',
    },
    { 
      id: '10', 
      companyName: 'Milliyet', 
      description: 'Demirören Medya Grubu bünyesindeki gazete.', 
      categoryId: '2',
    },
    { 
      id: '11', 
      companyName: 'Kanal D', 
      description: 'Demirören Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '12', 
      companyName: 'CNN Türk', 
      description: 'Demirören Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '13', 
      companyName: 'D-Smart', 
      description: 'Demirören Grubu\'nun dijital platform ve televizyon yayın hizmeti.', 
      categoryId: '2',
    },
    { 
      id: '14', 
      companyName: 'Milli Piyango ve İddaa', 
      description: 'Demirören Grubu\'nun şans oyunları işletmeleri.', 
      categoryId: '6',
    },
    { 
      id: '64', 
      companyName: 'Posta', 
      description: 'Demirören Medya Grubu bünyesindeki gazete.', 
      categoryId: '2',
    },
    { 
      id: '65', 
      companyName: 'Vatan', 
      description: 'Demirören Medya Grubu bünyesindeki gazete.', 
      categoryId: '2',
    },
    { 
      id: '66', 
      companyName: 'Fanatik', 
      description: 'Demirören Medya Grubu bünyesindeki spor gazetesi.', 
      categoryId: '2',
    },
    { 
      id: '63', 
      companyName: 'ETS Tur', 
      description: 'Demirören Grubu\'nun turizm şirketi.', 
      categoryId: '3',
    },

    // Kalyon İnşaat ve Zirve Holding
    { 
      id: '15', 
      companyName: 'Kalyon İnşaat', 
      description: 'Özellikle İstanbul Havalimanı gibi büyük projelerde yer alan inşaat şirketi.', 
      categoryId: '5',
    },
    { 
      id: '16', 
      companyName: 'İstanbul Havalimanı', 
      description: 'Kalyon İnşaat\'ın büyük projelerinden biri.', 
      categoryId: '5',
    },
    { 
      id: '17', 
      companyName: 'ATV', 
      description: 'Kalyon-Zirve gruplarının medya yatırımlarından.', 
      categoryId: '2',
    },
    { 
      id: '18', 
      companyName: 'A Haber', 
      description: 'Kalyon-Zirve gruplarının medya yatırımlarından.', 
      categoryId: '2',
    },
    { 
      id: '67', 
      companyName: 'Kalyon Enerji', 
      description: 'Kalyon Holding\'in enerji şirketi.', 
      categoryId: '6',
    },

    // İhlas Holding
    { 
      id: '19', 
      companyName: 'İhlas Holding', 
      description: 'Çeşitli sektörlerde faaliyet gösteren holding.', 
      categoryId: '6',
    },
    { 
      id: '20', 
      companyName: 'Türkiye Gazetesi', 
      description: 'İhlas Holding bünyesindeki gazete.', 
      categoryId: '2',
    },
    { 
      id: '21', 
      companyName: 'TGRT Haber', 
      description: 'İhlas Holding bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '22', 
      companyName: 'İhlas Ev Aletleri', 
      description: 'İhlas Holding\'in tüketici elektroniği şirketi.', 
      categoryId: '4',
    },

    // Albayrak Grubu
    { 
      id: '23', 
      companyName: 'Albayrak Grubu', 
      description: 'Birçok sektörde faaliyet gösteren holding.', 
      categoryId: '6',
    },
    { 
      id: '24', 
      companyName: 'Yeni Şafak', 
      description: 'Albayrak Grubu\'nun medya kuruluşu.', 
      categoryId: '2',
    },
    { 
      id: '25', 
      companyName: 'TVNet', 
      description: 'Albayrak Grubu\'nun televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '26', 
      companyName: 'Tümosan', 
      description: 'Albayrak Grubu\'nun motor ve traktör üretim şirketi.', 
      categoryId: '1',
    },
    { 
      id: '70', 
      companyName: 'Trabzon Limanı', 
      description: 'Albayrak Grubu\'nun lojistik sektöründeki varlığı.', 
      categoryId: '6',
    },

    // Türkmedya Grubu
    { 
      id: '27', 
      companyName: 'Türkmedya Grubu', 
      description: 'Farklı gazete ve televizyon kanallarından oluşan medya grubu.', 
      categoryId: '2',
    },
    { 
      id: '28', 
      companyName: 'Akşam Gazetesi', 
      description: 'Türkmedya Grubu bünyesindeki gazete.', 
      categoryId: '2',
    },
    { 
      id: '29', 
      companyName: '24 TV', 
      description: 'Türkmedya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '69', 
      companyName: '360 TV', 
      description: 'Türkmedya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },

    // Yeni Dünya Medya Grubu
    { 
      id: '30', 
      companyName: 'Kanal 7', 
      description: 'Yeni Dünya Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '31', 
      companyName: 'Ülke TV', 
      description: 'Yeni Dünya Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '68', 
      companyName: 'Beyaz TV', 
      description: 'Yeni Dünya Medya Grubu bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },

    // Can Holding
    { 
      id: '32', 
      companyName: 'Can Holding', 
      description: 'Medya, enerji ve eğitim sektörlerinde faaliyet gösteren holding.', 
      categoryId: '6',
    },
    { 
      id: '33', 
      companyName: 'Habertürk', 
      description: 'Can Holding bünyesindeki medya kuruluşu.', 
      categoryId: '2',
    },
    { 
      id: '34', 
      companyName: 'Show TV', 
      description: 'Can Holding bünyesindeki televizyon kanalı.', 
      categoryId: '2',
    },
    { 
      id: '35', 
      companyName: 'Bilgi Üniversitesi', 
      description: 'Can Holding\'in eğitim kurumu.', 
      categoryId: '6',
    },
    { 
      id: '71', 
      companyName: 'Bloomberg HT', 
      description: 'Can Holding bünyesindeki ekonomi kanalı.', 
      categoryId: '2',
    },
    
    // Additional individual companies
    { 
      id: '49', 
      companyName: 'Kamil Koç', 
      description: 'Otobüs firması.', 
      categoryId: '1',
    },
    { 
      id: '50', 
      companyName: 'Lakırtı Cafe', 
      description: 'Ankara\'da bulunan bir kafe.', 
      categoryId: '4',
    },
    { 
      id: '51', 
      companyName: 'Mado', 
      description: 'Dondurma ve tatlı zinciri.', 
      categoryId: '4',
    },
    { 
      id: '52', 
      companyName: 'Ülker', 
      description: 'Gıda ve atıştırmalık üreticisi.', 
      categoryId: '4',
    },
    { 
      id: '53', 
      companyName: 'Kızılkayalar', 
      description: 'Fast food zinciri.', 
      categoryId: '4',
    },
    { 
      id: '54', 
      companyName: 'Simit Sarayı', 
      description: 'Simit ve unlu mamüller satan kafe zinciri.', 
      categoryId: '4',
    },
    { 
      id: '55', 
      companyName: 'Bereket Döner', 
      description: 'Döner ve fast food zinciri.', 
      categoryId: '4',
    },
    { 
      id: '56', 
      companyName: 'Glob Coffee', 
      description: 'Kahve zinciri.', 
      categoryId: '4',
    },
    { 
      id: '57', 
      companyName: 'Espressolab', 
      description: 'Kahve zinciri.', 
      categoryId: '4',
    },
    { 
      id: '58', 
      companyName: 'Dublin Cafe', 
      description: 'Eskişehir\'de bulunan bir kafe.', 
      categoryId: '4',
    },
    { 
      id: '59', 
      companyName: 'Super Coffee', 
      description: 'Ankara\'da bulunan bir kafe.', 
      categoryId: '4',
    },
    { 
      id: '60', 
      companyName: 'Kızılay', 
      description: 'Yardım kuruluşu.', 
      categoryId: '6',
    },
    { 
      id: '61', 
      companyName: 'Watsons', 
      description: 'Kozmetik ve kişisel bakım ürünleri satan perakende zinciri.', 
      categoryId: '4',
    },
    { 
      id: '62', 
      companyName: 'D&R', 
      description: 'Kitap, müzik ve elektronik ürünler satan perakende zinciri.', 
      categoryId: '4',
    }
  ];

  constructor() {
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getBoycottItems(): BoycottItem[] {
    return this.boycottItems;
  }

  getBoycottItemsByCategory(categoryId: string): Observable<BoycottItem[]> {
    const filteredItems = this.boycottItems.filter(item => item.categoryId === categoryId);
    return of(filteredItems);
  }

  searchBoycottItems(query: string): Observable<BoycottItem[]> {
    if (!query.trim()) {
      // Return all items if query is empty
      return of(this.boycottItems);
    }
    
    const lowercaseQuery = query.toLowerCase().trim();
    
    // Fuzzy search implementation
    const filteredItems = this.boycottItems.filter(item => {
      // Check for direct matches first (most relevant)
      const companyNameLower = item.companyName.toLowerCase();
      const descriptionLower = item.description.toLowerCase();
      
      // Direct inclusion check - highest priority
      if (companyNameLower.includes(lowercaseQuery) || descriptionLower.includes(lowercaseQuery)) {
        return true;
      }
      
      // Word-level checks - second priority
      const companyWords = companyNameLower.split(/\s+/);
      const descriptionWords = descriptionLower.split(/\s+/);
      const queryWords = lowercaseQuery.split(/\s+/);
      
      // Check if any query word matches beginning of any company or description word
      for (const qWord of queryWords) {
        if (qWord.length < 2) continue; // Skip very short words
        
        // Check company name words
        for (const word of companyWords) {
          if (word.startsWith(qWord) || 
              (qWord.length > 3 && word.includes(qWord))) {
            return true;
          }
        }
        
        // Check description words
        for (const word of descriptionWords) {
          if (word.startsWith(qWord) || 
              (qWord.length > 3 && word.includes(qWord))) {
            return true;
          }
        }
      }
      
      // Levenshtein distance check for company name (only for queries with 3+ chars)
      if (lowercaseQuery.length >= 3) {
        // Check for edit distance for company name
        for (const word of companyWords) {
          if (word.length >= 4 && this.levenshteinDistance(word, lowercaseQuery) <= 2) {
            return true;
          }
        }
      }
      
      return false;
    });
    
    return of(filteredItems);
  }
  
  // Calculate Levenshtein distance between two strings
  private levenshteinDistance(a: string, b: string): number {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
  
    const matrix = [];
  
    // Initialize matrix
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
  
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
  
    // Fill matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
  
    return matrix[b.length][a.length];
  }
} 